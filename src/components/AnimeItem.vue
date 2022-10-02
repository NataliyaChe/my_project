<template>
        <div class="animecard" @click="$router.push(`/animes/${anime.mal_id}`)">
            <img class="animecard__poster" :src=anime?.images?.webp?.image_url alt="anime poster"> 
            <h3 class="animecard__title title">{{ anime.title }}</h3>
            <p class="text">Type: {{ anime.type }}</p>
            <p class="text">Episodes: {{ anime.episodes }}</p>  
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

<style scoped lang="scss">
    @import "@/assets/scss/variables.scss";

    .animecard {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 200px;
        cursor: pointer;
    
        &__poster {
            max-width: 200px;
            height: 300px;

        }

        &__title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
        }
    }

</style>