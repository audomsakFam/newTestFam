import { IsNumber, IsString } from 'class-validator';

export class CreateOrderItemDto {
  @IsString()
  readonly productId: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly currentPrice: number;
}
