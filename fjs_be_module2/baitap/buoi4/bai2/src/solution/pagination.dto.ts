import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min, IsString } from 'class-validator';

export class PaginationDto {
  @Type(() => Number) @IsInt() @Min(1) page = 1;
  @Type(() => Number) @IsInt() @Min(1) @Max(100) limit = 10;
  @IsOptional() @IsString() sortBy = 'createdAt';
  @IsOptional() @IsIn(['asc', 'desc']) sortOrder: 'asc' | 'desc' = 'desc';
}
