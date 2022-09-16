<template>
    <select class="select" v-model="modelValue" @change="changeOption">
        <option disabled value="">Choose from list</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
 export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String 
        },
        options: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
            // console.log(event.target.value);
            // console.log(event.target);
            // console.log(event);
        }
    }
    
   
 }
</script>

<style scoped>
    .select {
        color: teal;
        border: 1px solid teal;
        padding: 10px 15px;
    }
</style>