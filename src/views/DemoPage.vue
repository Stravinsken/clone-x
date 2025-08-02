
<template>
    <div>
        <p>인덱스: {{ index }}</p>
        <p>계산된 값: {{ computedValue }}</p>
        <button @click="incrementCount">카운트 증가</button>
        <button @click="index++">인덱스 증가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            count: 0,
        };
    },
    computed: {
        computedValue() {
            return this.count*2;
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`Count 변화 감지 ${oldValue} -> ${newValue}`);
            //watch는 자기가 감시하는 데이터가 변할 때마다 실행됨
            //보통 api 호출이나 다른 데이터 변경에 사용됨
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        }
    }
};
</script>

<style>

</style>