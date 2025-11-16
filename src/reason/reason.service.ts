import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsOrder } from 'typeorm';
import { Reason } from './reason.entity';

@Injectable()
export class ReasonService {
  constructor(
    @InjectRepository(Reason)
    private reasonRepo: Repository<Reason>,
  ) {}

  findAll() {
    return this.reasonRepo.find({
      order: { createdAt: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.reasonRepo.findOne({ where: { id } });
  }

  async create(data: Partial<Reason>) {
    const reason = this.reasonRepo.create(data);
    return this.reasonRepo.save(reason);
  }

  async update(id: number, data: Partial<Reason>) {
    const reason = await this.reasonRepo.findOne({ where: { id } });
    if (!reason) throw new NotFoundException('Reason not found');

    Object.assign(reason, data);
    return this.reasonRepo.save(reason);
  }

  async remove(id: number) {
    const result = await this.reasonRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Reason not found');
    }

    return { deleted: true };
  }
}