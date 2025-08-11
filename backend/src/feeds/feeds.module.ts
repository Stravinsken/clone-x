import { Module } from '@nestjs/common';
import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Feed } from './feeds.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Feed, User]),
    JwtModule.register({
      secret: 'random-secret-key-1234',
      signOptions: { expiresIn: '600m' },
    }),
  ],
  controllers: [FeedsController],
  providers: [FeedsService]
})
export class FeedsModule {}
