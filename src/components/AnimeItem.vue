<template>
        <div class="animecard wrap" @click="$router.push(`/animes/${anime.mal_id}`)">
            <div class="wrap">
                <img class="animecard__poster" :src=anime?.images?.webp?.image_url alt="anime poster"> 
                <h3 class="animecard__title title">{{ anime.title }}</h3>
            </div>
            <!-- <img class="animecard__poster" :src=anime?.images?.webp?.image_url alt="anime poster"> 
            <h3 class="animecard__title title">{{ anime.title }}</h3> -->
            <div class="animecard__info wrap">
                <!-- <h3 class="animecard__title title">{{ anime.title }}</h3> -->
                <!-- <div class="wrap info-wrap"> -->
                    <p class="text"> {{ anime.year }}</p>  
                    <p class="text">Type: {{ anime.type }}</p>
                </div>
            <!-- </div> -->
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
        max-width: 200px;
        cursor: pointer;

        &:hover {
            box-shadow: 2px 2px 4px gray;
        }
    
        &__poster {
            max-width: 200px;
            height: 300px;
            margin-bottom: 15px;
        }

        &__info {
            padding: 10px;
        } 

        &__title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
            padding: 0 10px;
        }
    }

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>