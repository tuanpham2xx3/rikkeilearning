import { Module } from '@nestjs/common';
import { UsersController } from './solution/users.controller';
@Module({ controllers: [UsersController] })
export class AppModule {}
