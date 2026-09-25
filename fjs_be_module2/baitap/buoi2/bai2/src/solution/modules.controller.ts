import { Controller, Get } from '@nestjs/common';
import { UsersFeatureService } from './users.module';

@Controller('modules')
export class ModulesController {
  constructor(private readonly users: UsersFeatureService) {}

  @Get()
  demonstrateReExport() {
    return this.users.list();
  }
}
