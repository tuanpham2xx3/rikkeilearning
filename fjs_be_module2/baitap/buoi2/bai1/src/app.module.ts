import { Module } from '@nestjs/common';
import { InfoModule } from './solution/info.module';
@Module({ imports: [InfoModule] })
export class AppModule {}
