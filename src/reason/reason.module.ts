import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reason } from './reason.entity';
import { ReasonService } from './reason.service';
import { ReasonController } from './reason.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reason])],
  controllers: [ReasonController],
  providers: [ReasonService],
})
export class ReasonModule {}