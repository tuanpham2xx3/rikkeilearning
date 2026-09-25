import { Controller, Get, Inject } from '@nestjs/common';
import { APP_CONFIG } from './config.constants';

@Controller('info')
export class InfoController {
  constructor(@Inject(APP_CONFIG) private readonly config: typeof import('./config.constants').appConfig) {}

  @Get()
  getInfo() {
    return this.config;
  }
}
