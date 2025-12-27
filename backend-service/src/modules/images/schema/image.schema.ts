import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  altText: string;

  @Prop({ required: true, ref: 'Product', type: Types.ObjectId })
  productId: string;

  @Prop({ default: false })
  isMain: boolean;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
