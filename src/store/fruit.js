import { defineStore } from "pinia";

export const useFruitStore = defineStore("fruit", {
    state: () => ({
        fruitList: [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Banana'},
            {id: 3, name: 'Orange'},
            {id: 4, name: 'Date'},
            {id: 5, name: 'Elderberry'},
        ]
    }),
    getters: {
        getFruitListLength: (state) => state.fruitList.length,
        getFruitByNameWithA: (state) => state.fruitList.filter(fruit => fruit.name.includes('a')),
    },
    actions: {
        removeFirstItem() {
            this.fruitList.shift();
        },
        removeLastItem() {
            this.fruitList.pop();
        },

    }
});