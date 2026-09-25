import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OwnershipGuard } from './solution/ownership.guard';
import { DemoUserMiddleware } from './solution/demo-user.middleware';
import { PostsController } from './solution/posts.controller';
@Module({ controllers: [PostsController], providers: [OwnershipGuard, DemoUserMiddleware] })
export class AppModule implements NestModule { configure(c: MiddlewareConsumer) { c.apply(DemoUserMiddleware).forRoutes(PostsController); } }
