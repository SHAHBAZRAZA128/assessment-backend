import { IsEmail, IsEnum, IsBoolean, IsOptional, IsDate, IsDateString } from 'class-validator';

enum AccessLevel {
  Signatory = 'Signatory',
  Manager = 'Manager',
  Viewer = 'Viewer',
}

export class CreateMemberDto {
  @IsEmail()
  email: string;

  @IsEnum(AccessLevel)
  accessLevel: AccessLevel;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsDateString()
  joinedDate?: string;
}
