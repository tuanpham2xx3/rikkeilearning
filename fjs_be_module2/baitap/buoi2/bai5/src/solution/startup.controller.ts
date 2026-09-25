import { Controller, Get } from '@nestjs/common';
import { StartupService } from './startup.service';

@Controller('startup')
export class StartupController {
  constructor(private readonly startup: StartupService) {}
  @Get()
  status() { return this.startup.status(); }
}
