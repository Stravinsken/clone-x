<template>
    <div class="feed-list-container">
        <div v-if="feedStore.feedData.length > 0">
            <FeedItem v-for="feed in feedStore.feedData" :key="feed.id" :feed="feed" />
        </div>
        <div v-else>
            <div>피드가 없습니다.</div>
        </div>
    </div>
</template>

<script>
import FeedItem from './FeedItem.vue';
import { useFeedStore } from "../store/feed.js";
export default {
    name: 'FeedList',
    data()  {
        return {
            feedStore: useFeedStore()
        }
    },
    components: { FeedItem },
    created() {
        // 초기 데이터 설정
        this.feedStore.getFeedData();
    }
}
</script>

<style scoped>
.feed-list-container{
    height: 60vh;
    overflow-y: auto;

    scrollbar-width: none;
}

</style>