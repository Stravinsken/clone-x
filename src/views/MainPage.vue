<template>
    <div>
        <div class="title-container">
            <h2>Home</h2>
            <div>User님</div>
        </div>
        <TweetBar />
        <div class="feed-list-container">
            <FeedList v-for="feed in feeds" :key="feed.id" :feed="feed" />
        </div>
    </div>
</template>

<script>
import TweetBar from '../components/TweetBar.vue'
import FeedList from '../components/FeedList.vue'
export default {
    name: "MainPage",
    components: { TweetBar, FeedList },
    data() {
        return {
            feeds: [
                {
                    id: 1,
                    content: '첫 번째 피드입니다.',
                    user: { name: '유저1' }
                },
                {
                    id: 2,
                    content: '두 번째 피드입니다.',
                    user: { name: '유저2' }
                },
                {
                    id: 3,
                    content: '세 번째 피드입니다.',
                    user: { name: '유저3' }
                },
                {
                    id: 4,
                    content: '네 번째 피드입니다.',
                    user: { name: '유저4' }
                },
                {
                    id: 5,
                    content: '다섯 번째 피드입니다.',
                    user: { name: '유저5' }
                },
                {
                    id: 6,
                    content: '여섯 번째 피드입니다.',
                    user: { name: '유저6' }
                },
                {
                    id: 7,
                    content: '일곱 번째 피드입니다.',
                    user: { name: '유저7' }
                },
                {
                    id: 8,
                    content: '여덟 번째 피드입니다.',
                    user: { name: '유저8' }
                },
                {
                    id: 9,
                    content: '아홉 번째 피드입니다.',
                    user: { name: '유저9' }
                },
                {
                    id: 10,
                    content: '열 번째 피드입니다.',
                    user: { name: '유저10' }
                }
            ]
        }
    }
}
</script>

<style scoped>
.feed-list-container{
    height: 60vh;
    overflow-y: auto;

    scrollbar-width: none;
}
.title-container {
    width : 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>