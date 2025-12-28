import {
  Body,
  Controller,
  Delete,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enum/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';

@Controller('order-items')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.orderItemsService.deleteById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.updateById(id, updateOrderItemDto);
  }
}
