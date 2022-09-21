<template>
    <div class="genres__list">
        <p class="genres__item" v-for="genre in genres" >{{ genre.name }}</p>
    </div>
</template>

<script>
 export default {
    props: {
        genres: {
            type: Array,
            required: true,
        }
    },
 }
</script>

<style scoped>
  
</style>