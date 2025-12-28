import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Order {
  @Prop({ required: true, ref: 'User', type: Types.ObjectId })
  userId: string;

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  status: string; // 'Pending', 'Completed', 'Cancelled'
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.virtual('Items', {
  ref: 'OrderItem',
  localField: '_id',
  foreignField: 'orderId',
});
