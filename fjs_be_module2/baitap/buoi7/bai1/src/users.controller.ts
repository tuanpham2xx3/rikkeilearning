import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { BearerTokenGuard } from './bearer-token.guard';
import { UseGuards } from '@nestjs/common';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Post()
  create(@Body() body: { email: string }) { return this.users.create(body.email); }

  @Get('profile')
  @UseGuards(BearerTokenGuard)
  @ApiOperation({ summary: 'Profile được dùng trong E2E test' })
  profile() { return { id: 'user-1', email: 'test@example.com' }; }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 20 })
  list(@Query('page') page = '1', @Query('limit') limit = '20') { return { page: Number(page), limit: Number(limit), data: [] }; }

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ schema: { type: 'object', properties: { file: { type: 'string', format: 'binary' } } } })
  upload(@UploadedFile() file?: { originalname: string }) { return { uploaded: Boolean(file), filename: file?.originalname }; }
}
