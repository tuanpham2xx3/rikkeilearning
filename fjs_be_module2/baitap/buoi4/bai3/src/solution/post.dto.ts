import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

export class UpdatePostDto {
  @IsOptional() @IsString() @MinLength(3) title?: string;
  @IsOptional() @IsString() content?: string;
}

export class AdditionalPrivilegesDto {
  @IsOptional() @IsBoolean() canComment?: boolean;
  @IsOptional() @IsBoolean() canShare?: boolean;
}

export class UpdatePostWithPrivilegesDto extends IntersectionType(UpdatePostDto, AdditionalPrivilegesDto) {}
