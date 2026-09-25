import { Body, Controller, Post } from '@nestjs/common';
import { InsufficientFundsException } from './insufficient-funds.exception';

@Controller('transfer')
export class TransferController {
  @Post()
  transfer(@Body() body: { balance: number; amount: number }) {
    if (body.amount > body.balance) throw new InsufficientFundsException();
    return { transferred: body.amount };
  }
}
