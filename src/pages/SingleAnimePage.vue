<template>
    <div class="anime container">
        <div class="flex-wrap">
            <img :src="image" alt="anime poster">
            <div class="anime__info">
                <h3 class="title anime__title">{{ anime.title }}</h3> 
                <p class="anime__title-jp">{{ anime.title_japanese }}</p> 
                <p>
                    <span class="subtitle">Type:</span> {{ anime.type }}
                </p>
                <p>
                    <span class="subtitle">Episodes:</span> {{ anime.episodes }}
                </p>  
                <p>
                    <span class="subtitle">Rating:</span> {{ anime.rating }}
                </p> 
                <p>
                    <span class="subtitle">Score:</span> {{ anime.score }}
                </p> 
                <p>
                    <span class="subtitle">Year:</span> {{ anime.year }}
                </p> 
            </div>
        </div>
         <div>
            {{ anime.synopsis }}
         </div>
    </div> 
</template>

<script>
    import axios from 'axios';
 export default {
    props: ['id'],
    data() {
        return {
            anime: {},
            image: null
        }
    },
    methods: {
        async fetchAnimes () {
            try {
                console.log(this.$route.params.id, 'test1');
                const response = await axios.get(`https://api.jikan.moe/v4/anime/${this.$route.params.id}`);
                this.anime = response.data.data
                this.image = this.anime.images.webp.image_url
                console.log(response.data.data, 'test12')
            } catch (e) {
                console.log(e)   
            }
        }
    },
    mounted() {
        this.fetchAnimes() 
    }
 }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/variables.scss";

    .anime {
        display: flex;
        flex-direction: column;
        gap:40px;

        &__info {
            padding-top: 20px;
        }

        &__title-jp {
            margin-bottom: 20px;
            font-size: 14px;
        }
    }

    .flex-wrap {
        display: flex;
        justify-content: left;
        gap:40px;
    }
</style>