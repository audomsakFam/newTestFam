import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductTypesService } from './product-types.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { Role } from '../auth/enum/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';

@Controller('product-types')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
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
