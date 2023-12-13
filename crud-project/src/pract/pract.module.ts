import { Module } from '@nestjs/common';
import { PractController } from './pract.controller';

@Module({
  controllers: [PractController]
})
export class PractModule {}
