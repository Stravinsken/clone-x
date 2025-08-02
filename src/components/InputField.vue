<template>
    <div class="container">
        <input class="input-form" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
    </div>
</template>

<script>
export default {
    name: "InputField",
    props: {
        type : String,
        placeholder: String,
        modelValue: String,
    },
    emits: ['update:modelValue'],
    methods: {
        updateValue(event) {
            const value = event.target.value.trim();
            this.$emit('update:modelValue', value);    
        }
    }
}
</script>

<style scoped>
.container{
    height: fit-content;
    width: 300px;
}

.input-form {
    box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 */
    /* box-sizing: content-box; 패딩과 테두리를 포함한 너비 */
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: #000000;
    margin-bottom: 10px;
    font-size: 12px;
    color: gray;
}
</style>