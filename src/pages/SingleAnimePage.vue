<template>
    <div>
        <div class="">
            <h1>Anime page with id = {{ $route.params.id }}</h1>
            <!-- <div class="anime__container">
                <h3>Title: {{ anime.title }}</h3>
                <p>Type: {{ anime.type }}</p>
                <p>Episodes: {{ anime.episodes }}</p>  
                <p>Mal_id: {{ anime.mal_id }}</p>    
            </div> -->
            
        </div>
    </div>
</template>

<script>
 export default {
    props: ['id'],
    // methods: {
        
    // },
    // mounted() {
    //     this.fetchAnimes();
    // },
 }
</script>

<style scoped>

</style>