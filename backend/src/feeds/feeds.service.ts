import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feed } from './feeds.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedsService {
    constructor(
        @InjectRepository(Feed)
        private feedRepository: Repository<Feed>,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    
    async getFeeds() {
        return this.feedRepository.find({ order: { created_at: 'DESC' } });
    }

    async createFeed(feed:CreateFeedDto, userId: number){
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found');
        }
        const newFeed = this.feedRepository.create({
            content: feed.content,
            user: user,
        });

        return await this.feedRepository.save(newFeed);
    }

    async deleteFeed(id: number) {
        return await this.feedRepository.delete(id);
    }

    async getFeedsWithUser(){
        const feeds = await this.feedRepository.find({
            relations: ['user'],    //외래키로 연관된 정보를 같이 불러오기 위해서는 relations를 사용한다.
            order: { created_at: 'DESC' },
        });
        
        const feedsWithUserInfo = feeds.map((feed) => ({
            ...feed,
            user: {
                id: feed.user.id,
                name: feed.user.name,
            },
        }));

        return feedsWithUserInfo;
    }
}
