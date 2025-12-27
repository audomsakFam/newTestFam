import { IsString } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  readonly name: string;
}
