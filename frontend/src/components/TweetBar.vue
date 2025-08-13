<template>
    <div class="container">
        <input type="text" :placeholder="userStore.placeholder" class="input-form" v-model="tweetContent" />
        <img src="../assets/search.png" class="search-icon" @click="tweet"/>
    </div>
</template>

<script>
import { useFeedStore } from '../store/feed';
import { useUserStore } from '../store/user'
export default {
    name: 'TweetBar',
    data() {
        return {
            tweetContent: '',
            userStore: useUserStore(),
            feedStore: useFeedStore(), 
        };
    },
    methods: {
        async tweet() {
            await this.feedStore.addFeed(this.tweetContent);
            this.tweetContent = ''; // Clear the input after tweeting
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: auto;
    position: relative;
}

.input-form {
    box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 */
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    z-index: 0;
}

.search-icon {
    box-sizing: border-box;
    width: 40px;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    right: 0px;
    z-index: 1;
    border: 1px solid #1d9bf0;
    cursor: pointer;
}

</style>