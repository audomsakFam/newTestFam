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
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enum/role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
@Controller('units')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
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
