<template>
    <div>
        <div class="title-container">
            <h2>Home</h2>
            <div>{{ userStore.name }}님</div>
        </div>
        <TweetBar />
        <FeedList />
        <div class="logout" @click="logout">logout</div>
    </div>
</template>

<script>
import TweetBar from '../components/TweetBar.vue'
import FeedList from '../components/FeedList.vue'
import { useUserStore } from '../store/user' 

export default {
    name: "MainPage",
    components: { TweetBar, FeedList },
    data() {
        return {
            userStore: useUserStore()
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.title-container {
    width : 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logout {
    width: 100%;
    text-align: right;
    margin-top: 10px;
    color: red;
    cursor: pointer;
}
</style>