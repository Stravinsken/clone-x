<template>
    <div class="feed-container">
        <div class="feed-header">
            <div class="feed-content">{{ feed.content }}</div>
            <button class="feed-delete-button" >X</button>
        </div>
        <div class="feed-name">{{ feed.user.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'FeedItem',
    props: {
        feed: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.feed-container{
    height: 80px;
    background-color: white;
    margin: 10px 0px;
    color: black;
    padding: 3px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
}
.feed-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.feed-content {
    padding: 1%;
}

.feed-delete-button {
    background: none;
    border: none;
    cursor: pointer;
}

.feed-name{
    text-align: right;
    font-size: 12px;;
}

</style>