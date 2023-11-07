import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { DebtModule } from './debt/debt.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    DebtModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
