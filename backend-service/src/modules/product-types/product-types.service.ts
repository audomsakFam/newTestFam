import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductType, ProductTypeDocument } from './schema/product-type.schema';
import { Model } from 'mongoose';
import { CreateProductTypeDto } from './dto/create-product-type.dto';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectModel(ProductType.name)
    private productTypeModel: Model<ProductTypeDocument>,
  ) {}

  async create(
    createProductTypeDto: CreateProductTypeDto,
  ): Promise<ProductType> {
    const createdProductType = new this.productTypeModel(createProductTypeDto);
    return createdProductType.save();
  }

  async findAll(): Promise<ProductType[]> {
    return this.productTypeModel.find().exec();
  }

  async findById(id: string): Promise<ProductType | null> {
    return this.productTypeModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<ProductType | null> {
    return this.productTypeModel.findByIdAndDelete(id).exec();
  }

  async updateById(
    id: string,
    updateProductTypeDto: Partial<CreateProductTypeDto>,
  ): Promise<ProductType | null> {
    return this.productTypeModel
      .findByIdAndUpdate(id, updateProductTypeDto, { new: true })
      .exec();
  }
}
