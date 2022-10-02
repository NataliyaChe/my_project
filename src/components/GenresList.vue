<template>
    <div class="genrelist dropdown" @click="selectGenre">
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

// .genrelist {
//     max-width: 200px;

//     @media (max-width: $small) {
//             display: none;
//             position:absolute;

//             background: pink;
//         }

//     &__item {
//         padding: 3px;
//         padding-left: 10px;
//         cursor: pointer;

//         &:hover {
//             border-radius: 5px;
//             background: #ededee;
//         }

//         // &:active {
//         //     border-radius: 5px;
//         //     background: #ededee;
//         // }

//         // &:focus {
//         //     border-radius: 5px;
//         //     background: $main-color;
//         // }
//     }
// }
.dropdown {

@media (max-width: $small) {
    display: unset !important;
    // visibility: visible;
        // position: absolute;
        background: pink;
        z-index: 10;
    }
}
.active {
    border-radius: 5px;
    background: $main-color;
}
</style>