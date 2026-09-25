import { Module } from '@nestjs/common';
import { TransferController } from './solution/transfer.controller';
@Module({ controllers: [TransferController] })
export class AppModule {}
