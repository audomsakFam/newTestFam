import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, default: 0 })
  qtyInStock: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true, ref: 'Unit', type: Types.ObjectId })
  unitId: string;

  @Prop({ required: true, ref: 'ProductType', type: Types.ObjectId })
  productTypeId: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
