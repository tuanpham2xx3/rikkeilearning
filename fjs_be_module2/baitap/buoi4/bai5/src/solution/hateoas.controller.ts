import { Controller, Get, Param } from '@nestjs/common';

@Controller('product-details')
export class HateoasController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      id, name: 'Keyboard', price: 1200000,
      _links: {
        self: { href: `/product-details/${id}`, method: 'GET' },
        update: { href: `/product-details/${id}`, method: 'PATCH' },
        delete: { href: `/product-details/${id}`, method: 'DELETE' },
        buy: { href: `/product-details/${id}/buy`, method: 'POST' },
      },
    };
  }
}
