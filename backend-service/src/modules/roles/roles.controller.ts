import { Controller, Delete, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':name')
  findByName(name: string) {
    return this.rolesService.findByName(name);
  }

  @Delete(':name')
  deleteByName(name: string) {
    return this.rolesService.deleteByName(name);
  }
}
