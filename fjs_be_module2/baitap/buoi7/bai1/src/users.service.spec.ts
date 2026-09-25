import { ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService edge cases', () => {
  it('throws ConflictException when the database reports a duplicate email', async () => {
    const service = new UsersService();
    service.create('same@example.com');
    await expect(async () => service.create('same@example.com')).rejects.toThrow(ConflictException);
  });
});
