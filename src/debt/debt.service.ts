import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DebtEntity } from './entities/debt.entity';
import { CreateDebtDto } from './dto/create-debt.dto';

@Injectable()
export class DebtService {
  constructor(
    @InjectRepository(DebtEntity)
    private debtRepository: Repository<DebtEntity>,
  ) { }

  async create(debt: CreateDebtDto) {
    return this.debtRepository.save(debt);
  }

  async findAll() {
    return this.debtRepository.find();
  }

  async findOne(id: string) {
    return this.debtRepository.findOne({ where: { id } });
  }

  async update(id: string, updatedDebt: CreateDebtDto) {
    await this.debtRepository.update(id, updatedDebt);
    return this.debtRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    await this.debtRepository.delete(id);
  }
}
