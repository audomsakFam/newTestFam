import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductTypesService } from './product-types.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';

@Controller('product-types')
export class ProductTypesController {
  constructor(private readonly productTypesService: ProductTypesService) {}

  @Get()
  findAll() {
    return this.productTypesService.findAll();
  }

  @Post()
  create(@Body() createProductTypeDto: CreateProductTypeDto) {
    return this.productTypesService.create(createProductTypeDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productTypesService.findById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.productTypesService.deleteById(id);
  }

  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body() updateProductTypeDto: Partial<CreateProductTypeDto>,
  ) {
    return this.productTypesService.updateById(id, updateProductTypeDto);
  }
}
