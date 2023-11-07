import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Debt')
export class DebtEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  typeOfDebt: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  initialAmount: number;

  @Column({ type: 'date', nullable: false })
  startDate: Date;

  @Column({ type: 'date', nullable: false })
  maturityDate: Date;

  @Column({ type: 'float', nullable: false })
  interestRate: number;

  @Column({ type: 'varchar', length: 10, nullable: false }) 
  currency: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
