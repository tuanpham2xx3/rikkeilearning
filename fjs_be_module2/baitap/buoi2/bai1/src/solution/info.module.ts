import { Module } from '@nestjs/common';
import { APP_CONFIG, appConfig } from './config.constants';
import { InfoController } from './info.controller';

@Module({
  controllers: [InfoController],
  providers: [{ provide: APP_CONFIG, useValue: appConfig }],
})
export class InfoModule {}
