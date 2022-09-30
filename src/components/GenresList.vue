<template>
    <div class="genres__list" @click="selectGenres">
        <p class="genres__item"
            :class='(genre.mal_id === +isActive) && "active"'
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
            isActive: null,
        }
    },
    methods: {
        selectGenres(event) {
            if(this.isActive === event.target.attributes.value.value) {
                this.isActive = null
            } else {
                this.isActive = event.target.attributes.value.value
            }
            this.$emit('getID', event.target.attributes.value.value, event.target.attributes.value.ownerElement.outerText, this.isActive)
            console.log('this.genre.mal_id', event.target.attributes.value.value, this.isActive);
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


<!-- :class={genre.mal_id === isActive ? "active" : " "}  -->