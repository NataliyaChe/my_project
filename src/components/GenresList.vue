<template>
    <div class="genrelist" @click="selectGenre">
        <p class="genrelist__item text"
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


<style scoped lang="scss">
    @import "@/assets/scss/sizing.scss";
    @import "@/assets/scss/variables.scss";

    .genrelist {
        max-width: 200px;

        @media (max-width: $small) {
                display: none;
                position: absolute;
                top: 100%;
            }

        &__item {
            padding: 3px;
            padding-left: 10px;
            cursor: pointer;

            @media (max-width: $small) {
                margin: 0 5px;
            }
            &:hover {
                border-radius: 5px;
                box-shadow: 2px 2px 4px gray;
            }
        }
    }
    .dropdown {
    
        @media (max-width: $small) {
            display: revert;
            position: absolute;
            right: 20px;
            top: 50px;
            z-index: 10;
            transition: all 1s ease-out 0.5s;
            background: $background-color;
            border: 1px solid $font-color;
        }
    }
    .active {
        border-radius: 5px;
        background: $main-color;
    }
</style>