import { IsDateString, IsNotEmpty } from 'class-validator';
import { IsAfterDate } from './is-after-date.decorator';

export class CreateEventDto {
  @IsNotEmpty() @IsDateString() startDate!: string;
  @IsNotEmpty() @IsDateString() @IsAfterDate('startDate', { message: 'Ngày kết thúc phải lớn hơn ngày bắt đầu' }) endDate!: string;
}
