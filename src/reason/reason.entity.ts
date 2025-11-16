import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Reason {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;
  @Column()
  description: string;
  @CreateDateColumn()
  createdAt: Date;
  @CreateDateColumn()
  updatedAt: Date;
}
