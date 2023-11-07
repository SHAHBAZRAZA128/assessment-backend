import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from './entities/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<MemberEntity> {
    const member = this.memberRepository.create(createMemberDto);
    return this.memberRepository.save(member);
  }

  async findAll(): Promise<MemberEntity[]> {
    return this.memberRepository.find();
  }

  async findOne(id: string): Promise<MemberEntity> {
    return this.memberRepository.findOne({ where: { id } });
  }

  async update(id: string, updateMemberDto: CreateMemberDto): Promise<MemberEntity> {
    await this.memberRepository.update(id, updateMemberDto);
    return this.memberRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
