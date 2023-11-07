import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dto/create-debt.dto'; 

@Controller('debts')
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Post()
  create(@Body() createDebtDto: CreateDebtDto) { 
    return this.debtService.create(createDebtDto);
  }

  @Get()
  findAll() {
    return this.debtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id' ,ParseUUIDPipe) id: string) {
    return this.debtService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateDebtDto: CreateDebtDto) { 
    return this.debtService.update(id, updateDebtDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.debtService.remove(id);
  }
}
