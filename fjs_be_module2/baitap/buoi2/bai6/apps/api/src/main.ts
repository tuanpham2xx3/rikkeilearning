import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DatabaseModule, DatabaseService } from '../../../libs/database/src';

@Controller()
class ApiController { constructor(private readonly db: DatabaseService) {} @Get() get() { return { app: 'api', ...this.db.ping() }; } }
@Module({ imports: [DatabaseModule], controllers: [ApiController] }) class ApiModule {}
NestFactory.create(ApiModule).then(app => app.listen(3001));
