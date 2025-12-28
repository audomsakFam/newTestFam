import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schema/order.schema';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { OrderItemsService } from '../order-items/order-items.service';
import { ProductsService } from '../products/products.service';
import { CreateOrderItemDto } from '../order-items/dto/create-order-item.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    private readonly usersService: UsersService,
    private readonly orderItemsService: OrderItemsService,
    private readonly productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, items } = createOrderDto;
    let totalAmount = 0;
    const orderItemsData: CreateOrderItemDto[] = [];

    if (!(await this.usersService.findOne(userId))) {
      throw new NotFoundException('User not found');
    }

    for (const item of items) {
      if (item.quantity <= 0) {
        throw new BadRequestException(
          'Item quantity must be greater than zero',
        );
      }

      const product = await this.productsService.findById(item.productId);

      if (!product) {
        throw new NotFoundException(
          `Product with ID ${item.productId} not found`,
        );
      }

      totalAmount += product.price * item.quantity;

      orderItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        currentPrice: product.price,
      });
    }

    const newOrder = new this.orderModel({
      userId: userId,
      totalAmount: totalAmount,
      status: 'Pending',
    });
    const savedOrder = await newOrder.save();

    if (!savedOrder) {
      throw new Error('Order creation failed');
    }

    try {
      const itemsWithOrderId = orderItemsData.map((item) => ({
        ...item,
        orderId: savedOrder._id,
      }));

      await this.orderItemsService.createMany(itemsWithOrderId);
    } catch (error) {
      await this.deleteById(savedOrder._id.toString());
      throw new Error(
        'Failed to create order items, rolling back transaction.',
        error,
      );
    }

    return savedOrder;
  }

  async findAll(): Promise<Order[]> {
    const result = await this.orderModel
      .find()
      .populate('userId')
      .populate('items')
      .exec();
    if (!result) {
      throw new NotFoundException('No orders found');
    }
    return result;
  }

  async updateStatus(id: string, status: string): Promise<Order> {
    const updatedOrder = await this.orderModel
      .findByIdAndUpdate(id, { status: status }, { new: true })
      .exec();
    if (!updatedOrder) {
      throw new NotFoundException('Order not found');
    }
    return updatedOrder;
  }

  async deleteById(id: string): Promise<Order> {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id).exec();
    if (!deletedOrder) {
      throw new NotFoundException('Order not found');
    }
    await this.orderItemsService.deleteManyByOrderId(id);
    return deletedOrder;
  }
}
