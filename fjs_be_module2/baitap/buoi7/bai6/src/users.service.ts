import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly emails = new Set<string>();

  create(email: string) {
    if (this.emails.has(email)) throw new ConflictException('Email đã tồn tại');
    this.emails.add(email);
    return { id: String(this.emails.size), email };
  }
}
