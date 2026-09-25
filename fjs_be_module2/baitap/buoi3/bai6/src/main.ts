import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './solution/all-exceptions.filter';
NestFactory.create(AppModule).then(async app => { app.useGlobalFilters(new AllExceptionsFilter()); await app.listen(3226); });
