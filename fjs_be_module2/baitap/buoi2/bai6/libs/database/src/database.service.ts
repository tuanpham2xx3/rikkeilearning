import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  ping() { return { database: 'shared-library', ok: true }; }
}
