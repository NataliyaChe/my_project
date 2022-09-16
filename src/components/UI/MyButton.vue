<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
 export default {
    name: 'MyButton'
 }
</script>

<style scoped>
    .btn {
        align-self: flex-end;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        margin-bottom: 20px;
    }

</style>