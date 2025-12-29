import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly telephone: string;

  @IsString()
  readonly password: string;

  @IsString()
  role?: string;
}
