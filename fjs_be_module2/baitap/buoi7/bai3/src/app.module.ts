import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersController } from './users.controller';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { BearerTokenGuard } from './bearer-token.guard';

@Module({ controllers: [AuthController, UsersController], providers: [AuthService, UsersService, BearerTokenGuard] })
export class AppModule {}
