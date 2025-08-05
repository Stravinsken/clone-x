<template>
    <div>LifeCycle {{ message }}</div>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return{
            message: "Hello Vue.js"
        }
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
}
</script>

<style>

</style>