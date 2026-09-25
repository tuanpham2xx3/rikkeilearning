import 'reflect-metadata';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
NestFactory.create(AppModule).then(async app => { app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector))); await app.listen(3256); });
