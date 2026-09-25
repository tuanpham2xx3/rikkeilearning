import { Controller, Get } from '@nestjs/common';

@Controller('ip-protected')
export class IpController {
  @Get()
  get() { return { ok: true, message: 'Request được phép đi tiếp' }; }
}
