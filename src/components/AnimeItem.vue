<template>
    <div class="anime">
        <div class="anime__container">
            <h3>Title: {{ anime.title }}</h3>
            <p>Type: {{ anime.type }}</p>
            <p>Episodes: {{ anime.episodes }}</p>  
            <p>Mal_id: {{ anime.mal_id }}</p>    
        </div>
        <MyButton @click="$router.push('./animes/${anime.id}')">Open</MyButton>
        <!-- <MyButton @click="$emit('remove', anime)">Open</MyButton> -->
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
    .anime {
        display: flex;
        justify-content: space-between;
    }

</style>