<template>
    <div class="feed-list-container">
        <div v-if="initFeedData.length > 0">
            <FeedItem v-for="feed in initFeedData" :key="feed.id" :feed="feed" />
        </div>
        <div v-else>
            <div>피드가 없습니다.</div>
        </div>
    </div>
</template>

<script>
import FeedItem from './FeedItem.vue';

const testData = [
    {
        id: 11,
        content: "코딩은 재밌어!",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 10,
        content: "JS 디버깅 중…",
        user: {
            id: 12,
            name: "테스터"
        }
    },
    {
        id: 9,
        content: "커피 한 잔의 여유...",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 6,
        content: "주말에 드라마 몰아보기",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 5,
        content: "우리 집 강아지 너무 귀여워",
        user: {
            id: 13,
            name: "다미장"
        }
    },
    {
        id: 4,
        content: "2025년에는 꼭 운동한다!",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 3,
        content: "디버깅만 몇 시간째…",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 2,
        content: "아침 커피로 하루 시작",
        user: {
            id: 11,
            name: "user"
        }
    },
    {
        id: 1,
        content: "오늘도 멋진 하루 되세요!",
        user: {
            id: 11,
            name: "user"
        }
    }
]

export default {
    name: 'FeedList',
    data()  {
        return {
            initFeedData: []
        }
    },
    components: { FeedItem },
    created() {
        // 초기 데이터 설정
        this.initFeedData = testData;
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