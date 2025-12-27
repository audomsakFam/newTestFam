import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { emptyDir } from 'fs-extra';
import sharp from 'sharp';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({
            fileType: 'image/*',
            skipMagicNumbersValidation: true,
          }),
        ],
      }),
    )
    files: Array<Express.Multer.File>,
    @Body('productId') productId: string,
  ) {
    await this.imagesService.validateProduct(productId);

    const uploadFolder = join(process.cwd(), 'uploads', productId);
    await emptyDir(uploadFolder);

    const processedImages = await Promise.all(
      files.map(async (file, index) => {
        const filename = `${Date.now()}-${file.originalname}.webp`;
        const filepath = join(uploadFolder, filename);

        await sharp(file.buffer)
          .resize(800, 800, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({ quality: 80 })
          .toFile(filepath);

        return {
          productId: productId,
          url: `/uploads/${productId}/${filename}`,
          name: filename,
          altText: 'product image',
          isMain: index === 0,
        };
      }),
    );

    await this.imagesService.createMany(processedImages);

    return { message: 'Files uploaded successfully', images: processedImages };
  }
}
