import { Controller, Get } from '@nestjs/common';

@Controller('limited')
export class LimitedController {
  @Get()
  get() { return { ok: true, message: 'Request trong giới hạn' }; }
}
