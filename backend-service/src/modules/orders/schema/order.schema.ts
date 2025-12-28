import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Status } from '../enum/status.enum';

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

  @Prop({ required: true, type: String, enum: Status, default: Status.PENDING })
  status: Status; // 'Pending', 'Completed', 'Cancelled'
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.virtual('Items', {
  ref: 'OrderItem',
  localField: '_id',
  foreignField: 'orderId',
});
