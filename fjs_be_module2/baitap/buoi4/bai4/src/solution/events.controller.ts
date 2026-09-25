import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventDto } from './event.dto';

@Controller('events')
export class EventsController {
  @Post()
  create(@Body() dto: CreateEventDto) { return { created: true, ...dto }; }
}
