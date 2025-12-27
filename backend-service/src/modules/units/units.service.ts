import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Unit, UnitDocument } from './schema/unit.schema';
import { Model } from 'mongoose';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(@InjectModel(Unit.name) private unitModel: Model<UnitDocument>) {}

  async create(createUnitDto: CreateUnitDto): Promise<Unit> {
    const createdUnit = new this.unitModel(createUnitDto);
    return createdUnit.save();
  }

  async findAll(): Promise<Unit[]> {
    return this.unitModel.find().exec();
  }

  async findById(id: string): Promise<Unit | null> {
    return this.unitModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<Unit | null> {
    return this.unitModel.findByIdAndDelete(id).exec();
  }

  async updateById(
    id: string,
    updateUnitDto: UpdateUnitDto,
  ): Promise<Unit | null> {
    return this.unitModel
      .findByIdAndUpdate(id, updateUnitDto, { new: true })
      .exec();
  }
}
