<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <span>{{item.id}} - {{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DemoPage',
    data(){
        return {
            items: [
                {id: 1, name: 'Apple'},
                {id: 2, name: 'Banana'},
                {id: 3, name: 'Orange'},
                {id: 4, name: 'Date'},
                {id: 5, name: 'Elderberry'},
            ]
        }
    },
    
}
</script>

<style>

</style>