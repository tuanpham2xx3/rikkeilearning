import { Module } from '@nestjs/common';
import { EventsController } from './solution/events.controller';
@Module({ controllers: [EventsController] })
export class AppModule {}
