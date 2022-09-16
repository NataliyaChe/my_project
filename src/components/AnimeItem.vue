<template>
    <div class="anime">
        <h3>Title: {{ anime.title }}</h3>
        <p>Type: {{ anime.type }}</p>
        <p>Episodes: {{ anime.episodes }}</p>  
    </div>
</template>

<script>
 export default {
    props: {
        anime: {
            type: Object,
            required: true,
        }
    },
   
    methods: {

    }
 }
</script>

<style scoped>
    

</style>