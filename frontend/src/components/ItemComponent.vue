<template>
    <li>
        <span>{{item.id}} - {{item.name}}</span>
    </li>
</template>

<script>
export default {
    name: 'ItemComponent',
    props: ["item"],
    updated() {
        console.log("updated : " + this.item.id, this.item.name);
    }

}
</script>

<style>

</style>