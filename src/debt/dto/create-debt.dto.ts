import { IsString, IsNumber, IsDate, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

export class CreateDebtDto {
  @IsNotEmpty()
  @IsString()
  typeOfDebt: string;

  @IsNotEmpty()
  @IsNumber()
  initialAmount: number;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  maturityDate: Date;

  @IsNotEmpty()
  @IsNumber()
  interestRate: number;

  @IsNotEmpty()
  @IsString()
  currency: string;
}
