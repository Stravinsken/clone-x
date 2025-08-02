<template>
    <div>
        <input :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
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

<style>

</style>