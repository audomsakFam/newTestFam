import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderItem, OrderItemDocument } from './schema/order-item.schema';
import { Model } from 'mongoose';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectModel(OrderItem.name) private orderModel: Model<OrderItemDocument>,
  ) {}

  async createMany(
    orderItems: CreateOrderItemDto[],
  ): Promise<CreateOrderItemDto[]> {
    return this.orderModel.insertMany(orderItems);
  }

  async deleteManyByOrderId(
    orderId: string,
  ): Promise<{ deletedCount?: number }> {
    const result = await this.orderModel.deleteMany({ orderId }).exec();
    return { deletedCount: result.deletedCount };
  }

  async deleteById(id: string): Promise<OrderItem> {
    const result = await this.orderModel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new Error('Order item not found');
    }

    return result;
  }

  async updateById(
    id: string,
    updateData: UpdateOrderItemDto,
  ): Promise<OrderItem> {
    const updatedOrderItem = await this.orderModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updatedOrderItem) {
      throw new Error('Order item not found');
    }
    return updatedOrderItem;
  }
}
