import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Image, ImageDocument } from './schema/image.schema';
import { ProductsService } from '../products/products.service';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
    private readonly productsService: ProductsService,
  ) {}

  async createMany(imageData: CreateImageDto[]): Promise<CreateImageDto[]> {
    return this.imageModel.insertMany(imageData);
  }

  async validateProduct(productId: string) {
    if (!isValidObjectId(productId)) {
      throw new BadRequestException('Invalid product ID');
    }
    const product = await this.productsService.findById(productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }
}
