import { Module } from '@nestjs/common';
import { HateoasController } from './solution/hateoas.controller';
@Module({ controllers: [HateoasController] })
export class AppModule {}
