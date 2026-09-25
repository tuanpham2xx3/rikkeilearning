import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email!: string;

  @IsString()
  @MinLength(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, { message: 'Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường và 1 chữ số' })
  password!: string;

  @Matches(/^(0|84|\+84)(3|5|7|8|9)\d{8}$/, { message: 'Số điện thoại phải đúng định dạng Việt Nam' })
  phone!: string;
}
