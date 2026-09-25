import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() dto: CreateUserDto) { return { created: true, user: dto }; }
}
