import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  findAll() {
    return this.unitsService.findAll();
  }

  @Post()
  create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitsService.create(createUnitDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.unitsService.findById(id);
  }

  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body() updateUnitDto: Partial<CreateUnitDto>,
  ) {
    return this.unitsService.updateById(id, updateUnitDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.unitsService.deleteById(id);
  }
}
