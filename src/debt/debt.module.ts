import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebtService } from './debt.service';
import { DebtController } from './debt.controller';
import { DebtEntity } from './entities/debt.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([DebtEntity])], 
  controllers: [DebtController],
  providers: [DebtService],
})
export class DebtModule {}
