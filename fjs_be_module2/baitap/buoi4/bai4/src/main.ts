import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
NestFactory.create(AppModule).then(async app => { app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true })); await app.listen(3234); });
