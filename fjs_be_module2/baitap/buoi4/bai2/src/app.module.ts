import { Module } from '@nestjs/common';
import { ProductsController } from './solution/products.controller';
@Module({ controllers: [ProductsController] })
export class AppModule {}
