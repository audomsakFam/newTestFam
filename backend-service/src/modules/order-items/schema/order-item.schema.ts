import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderItemDocument = OrderItem & Document;

@Schema()
export class OrderItem {
  @Prop({ required: true, ref: 'Order', index: true, type: Types.ObjectId })
  orderId: string;

  @Prop({ required: true, ref: 'Product', type: Types.ObjectId })
  productId: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  currentPrice: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
