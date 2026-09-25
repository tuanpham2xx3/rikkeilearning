import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { IpBlockMiddleware } from './solution/ip-block.middleware';
import { IpController } from './solution/ip.controller';
@Module({ controllers: [IpController] })
export class AppModule implements NestModule { configure(c: MiddlewareConsumer) { c.apply(IpBlockMiddleware).forRoutes(IpController); } }
