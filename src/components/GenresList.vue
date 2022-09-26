<template>
    <div class="genres__list" @click="selectGenres">
        <p class="genres__item"
            v-for="genre in genres" 
            :key="genre.mal_id" 
            :value="genre.mal_id">
            {{ genre.name }}
        </p>
    </div>
</template>

<script>
    
 export default {
    name: 'GenreList',
    props: {
        genres: {
            type: Array,
            required: true,
        }
    },
    methods: {
        selectGenres(event) {
            console.log('this.genre.mal_id', event.target.attributes.value.value, event);
            this.$emit(event.target.attributes.value.value)
            // this.$emit()
        }
        
    }
 }
</script>

<style scoped>
  
</style>