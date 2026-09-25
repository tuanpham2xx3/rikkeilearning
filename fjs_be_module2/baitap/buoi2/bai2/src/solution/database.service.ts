import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  query(sql: string) {
    return { sql, connected: true };
  }
}
