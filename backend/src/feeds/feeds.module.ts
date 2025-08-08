import { Module } from '@nestjs/common';
import { CoModule } from './co/co.module';
import { SerModule } from './ser/ser.module';
import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';

@Module({
  imports: [CoModule, SerModule],
  controllers: [FeedsController],
  providers: [FeedsService]
})
export class FeedsModule {}
