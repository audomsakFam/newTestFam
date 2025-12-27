import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly code: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly unitId: string;

  @IsString()
  readonly productTypeId: string;
}
