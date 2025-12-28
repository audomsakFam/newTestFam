import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enum/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN, Role.USER)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @Roles(Role.ADMIN)
  async getAll() {
    return this.ordersService.findAll();
  }

  @Get(':userId')
  async getByUserId(@Param('userId') userId: string) {
    return this.ordersService.findByUserId(userId);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  async updateStatus(@Param('id') id: string, @Body() status: string) {
    return this.ordersService.updateStatus(id, status);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async deleteById(@Param('id') id: string) {
    return this.ordersService.deleteById(id);
  }
}
