import { Controller, Get } from '@nestjs/common';

@Controller('database-demo')
export class DatabaseDemoController {
  @Get('duplicate')
  duplicate() { throw Object.assign(new Error('duplicate key'), { code: '23505' }); }
}
