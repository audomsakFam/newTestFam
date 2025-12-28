import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schema/role.schema';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async create(createdRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createdRoleDto);
    return createdRole.save();
  }

  async findAll(): Promise<Role[]> {
    const result = await this.roleModel.find().exec();
    if (!result) {
      throw new NotFoundException('No roles found');
    }
    return result;
  }

  async findByName(name: string): Promise<Role | null> {
    const result = await this.roleModel.findOne({ name }).exec();
    if (!result) {
      throw new NotFoundException('No roles found');
    }
    return result;
  }

  async deleteByName(name: string): Promise<Role | null> {
    const result = await this.roleModel.findOneAndDelete({ name }).exec();
    if (!result) {
      throw new NotFoundException('No roles found to delete');
    }
    return result;
  }
}
