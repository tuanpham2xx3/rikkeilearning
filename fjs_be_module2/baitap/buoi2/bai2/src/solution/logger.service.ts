import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(`[core] ${message}`);
  }
}
