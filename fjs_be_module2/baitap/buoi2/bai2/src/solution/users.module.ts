import { Injectable, Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { LoggerService } from './logger.service';
import { DatabaseService } from './database.service';

@Injectable()
export class UsersFeatureService {
  constructor(private readonly logger: LoggerService, private readonly db: DatabaseService) {}
  list() {
    this.logger.log('UsersModule gọi LoggerService');
    return this.db.query('select * from users');
  }
}

@Module({ imports: [CoreModule], providers: [UsersFeatureService], exports: [UsersFeatureService] })
export class UsersModule {}
