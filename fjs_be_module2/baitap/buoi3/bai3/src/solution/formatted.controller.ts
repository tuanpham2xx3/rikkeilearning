import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

@Controller('formatted')
@UseInterceptors(TransformInterceptor)
export class FormattedController {
  @Get()
  get() { return { message: 'Dữ liệu thành công' }; }
}
