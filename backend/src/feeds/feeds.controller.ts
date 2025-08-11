import { Controller, Get, UseGuards } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('feeds')
export class FeedsController {
    constructor(private readonly feedsService: FeedsService){}

    @Get()
    getFeeds() {
        return this.feedsService.getFeeds();
    }
}
