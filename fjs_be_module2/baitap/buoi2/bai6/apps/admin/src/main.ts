import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DatabaseModule, DatabaseService } from '../../../libs/database/src';

@Controller()
class AdminController { constructor(private readonly db: DatabaseService) {} @Get() get() { return { app: 'admin', ...this.db.ping() }; } }
@Module({ imports: [DatabaseModule], controllers: [AdminController] }) class AdminModule {}
NestFactory.create(AdminModule).then(app => app.listen(3002));
