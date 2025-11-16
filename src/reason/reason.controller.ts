import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReasonService } from './reason.service';
import { Reason } from './reason.entity';

@Controller('reasons')
export class ReasonController {
  constructor(private readonly reasonService: ReasonService) {}

  @Get()
  findAll() {
    return this.reasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: Partial<Reason>) {
    return this.reasonService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Reason>) {
    return this.reasonService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonService.remove(Number(id));
  }
}