import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

enum AccessLevel {
  Signatory = 'Signatory',
  Manager = 'Manager',
  Viewer = 'Viewer',
}

@Entity( 'Member')
export class MemberEntity  {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'enum', enum: AccessLevel, default: AccessLevel.Viewer, nullable: false })
  accessLevel: AccessLevel;

  @Column({ type: 'boolean', default: true, nullable: false })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  joinedDate: Date;

  
}
