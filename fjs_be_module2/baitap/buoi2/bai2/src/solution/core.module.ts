import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { LoggerService } from './logger.service';

@Global()
@Module({
  providers: [LoggerService, DatabaseService],
  exports: [LoggerService, DatabaseService],
})
export class CoreModule {}
