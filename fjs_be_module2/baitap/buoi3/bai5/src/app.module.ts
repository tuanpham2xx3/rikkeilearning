import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { LimitedController } from './solution/limited.controller';
import { RateLimitGuard } from './solution/rate-limit.guard';
@Module({ controllers: [LimitedController], providers: [{ provide: APP_GUARD, useClass: RateLimitGuard }] })
export class AppModule {}
