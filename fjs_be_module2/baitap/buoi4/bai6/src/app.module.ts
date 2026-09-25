import { Module } from '@nestjs/common';
import { UploadController } from './solution/upload.controller';
@Module({ controllers: [UploadController] })
export class AppModule {}
