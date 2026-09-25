import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './pagination.dto';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(@Query() query: PaginationDto) {
    return { query, types: { page: typeof query.page, limit: typeof query.limit } };
  }
}
