import { Module } from '@nestjs/common';
import { ConfigModule } from './solution/config.module';
import { ConfigController } from './solution/config.controller';
@Module({ imports: [ConfigModule.forRoot({ folder: 'config' })], controllers: [ConfigController] })
export class AppModule {}
