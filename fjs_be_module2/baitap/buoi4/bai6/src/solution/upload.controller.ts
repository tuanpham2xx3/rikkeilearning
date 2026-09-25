import { Controller, Param, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UploadController {
  @Post(':id/avatar')
  @UseInterceptors(FileInterceptor('file', { storage: diskStorage({ destination: './uploads', filename: (_req, file, cb) => cb(null, `${Date.now()}${extname(file.originalname)}`) }) }))
  upload(@Param('id') id: string, @UploadedFile(new ParseFilePipe({ validators: [new MaxFileSizeValidator({ maxSize: 2 * 1024 * 1024 }), new FileTypeValidator({ fileType: /\.(png|jpe?g)$/i })] })) file: Express.Multer.File) {
    return { userId: id, filename: file.filename, size: file.size };
  }
}
