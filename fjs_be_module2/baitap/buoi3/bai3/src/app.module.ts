import { Module } from '@nestjs/common';
import { FormattedController } from './solution/formatted.controller';
import { TransformInterceptor } from './solution/transform.interceptor';
@Module({ controllers: [FormattedController], providers: [TransformInterceptor] })
export class AppModule {}
