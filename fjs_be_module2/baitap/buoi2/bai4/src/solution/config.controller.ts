import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  getConfig() {
    return { folder: this.config.getFolder(), examplePath: this.config.get('app.json') };
  }
}
