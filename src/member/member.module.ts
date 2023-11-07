import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MemberEntity } from './entities/member.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])], 
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
