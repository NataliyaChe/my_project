<template>
    <div class="animelist">
        <AnimeItem v-for="anime in animes" :anime="anime"/>
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
    }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/sizing.scss";
    @import "@/assets/scss/variables.scss";

    .title {
        margin-bottom: 20px;
    }

    .animelist {
        display: grid;
        grid-template:  repeat(2, 1fr) / repeat(4, 1fr);
        grid-gap: 20px;

        @media (max-width: $tablet) {
            grid-template:  repeat(2, 1fr) / repeat(3, 1fr);
        }
   
        @media (max-width: $x-small) {
            grid-template:  repeat(2, 1fr) / repeat(2, 1fr); 
        }
    }
</style>