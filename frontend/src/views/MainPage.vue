<template>
    <div>
        <div class="title-container">
            <h2>Home</h2>
            <div>user님</div>
        </div>
        <TweetBar />
        <FeedList />
    </div>
</template>

<script>
// import { useUserStore } from '../store/user.js'
import TweetBar from '../components/TweetBar.vue'
import FeedList from '../components/FeedList.vue'
export default {
    name: "MainPage",
    // data() {
    //     return {
    //         userStore: useUserStore()
    //     }
    // },
    components: { TweetBar, FeedList },
}
</script>

<style scoped>
.title-container {
    width : 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>