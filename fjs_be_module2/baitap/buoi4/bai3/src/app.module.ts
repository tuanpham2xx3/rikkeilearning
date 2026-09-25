import { Module } from '@nestjs/common';
import { PostsController } from './solution/posts.controller';
@Module({ controllers: [PostsController] })
export class AppModule {}
