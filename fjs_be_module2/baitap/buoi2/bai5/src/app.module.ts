import { Module } from '@nestjs/common';
import { StartupModule } from './solution/startup.module';
@Module({ imports: [StartupModule] })
export class AppModule {}
