import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { isValidObjectId, Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UnitsService } from '../units/units.service';
import { ProductTypesService } from '../product-types/product-types.service';
import { SearchService } from '../search/search.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private readonly unitsService: UnitsService,
    private readonly productTypesService: ProductTypesService,
    private readonly searchService: SearchService,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    if (
      !isValidObjectId(createProductDto.unitId) ||
      !isValidObjectId(createProductDto.productTypeId)
    ) {
      throw new BadRequestException('Invalid related entity ID');
    }

    const unit = await this.unitsService.findById(createProductDto.unitId);
    const productType = await this.productTypesService.findById(
      createProductDto.productTypeId,
    );

    if (!productType || !unit) {
      throw new NotFoundException('Related entity not found');
    }

    const createdProduct = new this.productModel(createProductDto);
    const savedProduct = await createdProduct.save();
    await this.searchService.indexProduct(savedProduct);

    return savedProduct;
  }

  async syncAllProducts() {
    const products = await this.findAll();

    for (const product of products) {
      await this.searchService.indexProduct(product);
      console.log(`Synced: ${product.name}`);
    }

    return {
      msg: 'Sync completed',
      count: products.length,
    };
  }

  async findAll(): Promise<Product[]> {
    const results = await this.productModel
      .find()
      .populate('unitId')
      .populate('productTypeId')
      .exec();
    if (!results) {
      throw new NotFoundException('No products found');
    }
    return results;
  }

  async findById(id: string): Promise<Product | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid product ID');
    }

    const results = await this.productModel
      .findById(id)
      .populate('unitId')
      .populate('productTypeId')
      .exec();

    if (!results) {
      throw new NotFoundException('Product not found');
    }

    return results;
  }

  async deleteById(id: string): Promise<Product | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid product ID');
    }

    const results = await this.productModel.findByIdAndDelete(id).exec();

    if (!results) {
      throw new NotFoundException('Product not found');
    }

    return results;
  }

  async updateById(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid product ID');
    }
    const results = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();

    if (!results) {
      throw new NotFoundException('Product not found');
    }

    return results;
  }
}
