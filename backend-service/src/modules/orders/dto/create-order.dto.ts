import { IsArray, IsString } from 'class-validator';
import { CreateOrderItemDto } from 'src/modules/order-items/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsString()
  readonly userId: string;

  @IsArray()
  readonly items: CreateOrderItemDto[];
}
