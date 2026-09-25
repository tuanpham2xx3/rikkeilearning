import { Exclude } from 'class-transformer';

export class UserEntity {
  id!: string;
  email!: string;
  departmentId!: string;
  avatarUrl!: string;
  salary!: number;
  @Exclude()
  password!: string;
}
