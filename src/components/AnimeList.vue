<template>
    <div>
        <h1 class="title">Anime list</h1>
        <div class="animeList__container">
            <AnimeItem v-for="anime in animes" :anime="anime"/>
        </div>
    </div>
</template>

<script>
import AnimeItem from '@/components/AnimeItem.vue';
 export default {
    components: {
        AnimeItem,
    },
    props: {
        animes: {
            type: Array,
            required: true,
        }
    },
    
    methods: {

    }
 }
</script>

<style scoped>
    .title {
        margin-bottom: 20px;
    }

    .animeList__container {
        display: grid;
        grid-template:  repeat(2, 1fr) / repeat(4, 1fr);
        grid-gap: 20px;
    }

    .anime {
        padding: 15px;
        border: 2px solid teal;
        margin-bottom: 15px;
    }

</style>