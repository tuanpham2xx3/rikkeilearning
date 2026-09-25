import { Body, Controller, Patch, Param } from '@nestjs/common';
import { UpdatePostWithPrivilegesDto } from './post.dto';

@Controller('posts')
export class PostsController {
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePostWithPrivilegesDto) { return { id, ...dto }; }
}
