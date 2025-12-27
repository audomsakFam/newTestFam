import { IsBoolean, IsString } from 'class-validator';

export class CreateImageDto {
  @IsString()
  readonly productId: string;

  @IsString()
  readonly altText: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly url: string;

  @IsBoolean()
  readonly isMain: boolean;
}
