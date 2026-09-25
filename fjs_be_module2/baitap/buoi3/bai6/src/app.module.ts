import { Module } from '@nestjs/common';
import { DatabaseDemoController } from './solution/database-demo.controller';
@Module({ controllers: [DatabaseDemoController] })
export class AppModule {}
