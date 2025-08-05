<template>
    <div>
        <button @click="fruitStore.removeFirstItem">Remove First Item</button>
        <button @click="fruitStore.removeLastItem">Remove Last Item</button>
        <ul>
            <!-- <ItemComponent v-for="(item, index) in items" :key="index" :item="item" /> -->
            <!-- 위에 주석 처리된 코드는 v-for에서 index를 사용하고 있는데, 이거대로 하면 첫번째 아이템을 삭제시 다시 랜더링하는 문제가 발생한다. -->
            <ItemComponent v-for="item in fruitStore.fruitList" :key="item.id" :item="item" />
        </ul>
        <div>getFruitListLength:: {{ fruitStore.getFruitListLength }}</div>
        <div>getFruitByNameWithA:: {{ fruitStore.getFruitByNameWithA }}</div>
    </div>
</template>

<script>
import ItemComponent from '../components/ItemComponent.vue'
import { useFruitStore } from '../store/fruit'
export default {
    name: 'DemoPage',
    components: { ItemComponent },
    data(){
        return {
            fruitStore: useFruitStore(),
        }
    },   
}
</script>

<style>

</style>