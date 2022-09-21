<template>
    <div class="anime">
        <div class="anime__container" @click="$router.push(`/animes/${anime.mal_id}`)">
            <h3>Title: {{ anime.title }}</h3>
            <p>Type: {{ anime.type }}</p>
            <p>Episodes: {{ anime.episodes }}</p>  
            <p>Mal_id: {{ anime.mal_id }}</p>  
            <img :src=anime?.images?.webp?.image_url alt=""> 
        </div>
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
 }
</script>

<style scoped>
    .anime {
        display: flex;
        justify-content: space-between;
    }

</style>