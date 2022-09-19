<template>
    <div>
        <div class="">
            <h1>Anime page with id = {{ $route.params.id }}</h1>
             <div class="anime__container">
                <h3>Title: {{ anime.title }}</h3> 
                <p>Type: {{ anime.type }}</p>
                <p>Episodes: {{ anime.episodes }}</p>  
                <p>Mal_id: {{ anime.mal_id }}</p>   
                <img :src="image" alt="">
            </div> 
            
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
                console.log(response.data.data

, 'test12')
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

<style scoped>

</style>