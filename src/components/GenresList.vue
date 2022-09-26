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
            this.$emit('getID', event.target.attributes.value.value, event.target.attributes.value.ownerElement.outerText)
            console.log('this.genre.mal_id', event.target.attributes.value.ownerElement.outerText);
        }
        
    }
 }
</script>

<style scoped>
  
</style>