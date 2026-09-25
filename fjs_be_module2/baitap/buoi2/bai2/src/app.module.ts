import { Module } from '@nestjs/common';
import { UsersModule } from './solution/users.module';
import { ModulesController } from './solution/modules.controller';
@Module({ imports: [UsersModule], controllers: [ModulesController] })
export class AppModule {}
