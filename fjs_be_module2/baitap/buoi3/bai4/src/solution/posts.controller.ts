import { Controller, Delete, Param, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { OwnershipGuard } from './ownership.guard';

@Controller('posts')
export class PostsController {
  @Delete(':id')
  @UseGuards(OwnershipGuard)
  remove(@Param('id') id: string, @Req() req: Request) {
    return { deleted: true, id, owner: (req as Request & { user: { id: string } }).user.id };
  }
}
