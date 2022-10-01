<template>
    <div class="genres__list" @click="selectGenre">
        <p class="genres__item"
            :class='(genre.mal_id === +activeGenreId) && "active"'
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
    data() {
        return {
            activeGenreId: null,
        }
    },
    methods: {
        selectGenre(event) {
            const genreId = event.target.attributes.value.value
            if(this.activeGenreId === genreId) {
                this.activeGenreId = null
            } else {
                this.activeGenreId = genreId
            }
            this.$emit('getID', this.activeGenreId, event.target.attributes.value.ownerElement.outerText)
        },
    }
 }
</script>

<style scoped>
  .active {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background: teal;
  }
</style>