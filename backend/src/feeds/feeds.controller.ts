import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { CreateFeedDto } from './dto/create-feed.dto';

@UseGuards(JwtAuthGuard)    //jwtAuth 의존성 주입
@Controller('feeds')
export class FeedsController {
    constructor(private readonly feedsService: FeedsService){}

    @Get()
    getFeeds() {
        return this.feedsService.getFeedsWithUser();
    }

    @Post()
    createdFeed(
        @Body() feed:CreateFeedDto, 
        @Req() request:Request & { user: {id : number} 
    }){
    const userId = request.user.id;
    return this.feedsService.createFeed({...feed}, userId);
    }

    @Delete(':id')
    deleteFeed(@Param('id') id: number) {
        return this.feedsService.deleteFeed(id);
    }
}
