import { Inject, Injectable } from '@nestjs/common';
import { THIRD_PARTY_CONNECTION } from './startup.constants';

@Injectable()
export class StartupService {
  constructor(@Inject(THIRD_PARTY_CONNECTION) private readonly connection: { connectedAt: string }) {}

  status() {
    return { ready: true, connection: this.connection };
  }
}
