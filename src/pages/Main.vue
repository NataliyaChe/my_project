<template>
    <main class="main container">
        <div class="main__content">
            <div class="flex-wrap">
                <h2 class="main__title title">Anime list <span v-if="seen">sort by genre: {{ message }}</span></h2>
            <h2 class="main__title main__genres title">Genres</h2>
            </div>
            
            <!-- <p v-if="seen">Sort by genre: {{ message }}</p> -->
            <AnimeList class="main__list" :animes="animes"/> 
            <VueTailwindPagination 
                class="main__pagination"
                :current="page" 
                :total="totalPages" 
                :per-page="limit" 
                @page-changed="changePage($event)">
            </VueTailwindPagination>
        </div>
        <aside class="main__aside">
            <h2 class="main__title main__genresaside title">Genres:</h2>
            <GenresList class="genrelist dropdown" :genres="genres" @getID="fetchAnimesByGenre"></GenresList>
        </aside>
    </main>
</template>

<script>
import AnimeForm from '@/components/AnimeForm.vue';
import AnimeList from '@/components/AnimeList.vue';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import '@ocrv/vue-tailwind-pagination/styles';
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';
import GenresList from '@/components/GenresList.vue';

export default {
    components: {
        AnimeForm,
        AnimeList,
        MySelect,
        MyInput,
        MyButton,
        VueTailwindPagination,
        GenresList,
    },
    data() {
        return {
            animes: [],
            page: 1,
            limit: 24,
            totalPages: 0,
            genres: [],
            activeGenreId: null,
            seen: false,
            genreName: '',        
        }
    },
    methods: {
        changePage(pageNumber) {
            this.page = pageNumber;
            if(this.activeGenreId) {
                this.fetchAnimesByGenre(this.activeGenreId, this.genreName)
            } else {
                this.fetchAnimes()
            }
        },
        async fetchAnimes () {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
                    params: {
                        page: this.page,
                        limit: this.limit
                    }
                });
                
                this.totalPages = response.data.pagination.items.total
                this.animes = response.data.data;
            } catch (e) {
                console.log(e)
                
            }
        },
        async fetchGenres () {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/genres/anime');

                this.genres = response.data.data;    
            } catch (e) {
                console.log(e)   
            }
        },
        async fetchAnimesByGenre (id, name) {
            if(!id) {
                this.activeGenreId = null
                return this.fetchAnimes ()
            }
            this.seen = true
            this.message = name
            this.activeGenreId = id
            this.genreName = name
            
            const response = await axios.get('https://api.jikan.moe/v4/anime', {
                    params: {
                        page: this.page,
                        limit: this.limit,
                    genres: id,
                }
            });
            
            this.totalPages = response.data.pagination.items.total
            this.animes = response.data.data;   
        },
    },
    mounted() {
        this.fetchAnimes();
        this.fetchGenres();
    },
 }
</script>

<style lang="scss">
@import "@/assets/scss/sizing.scss";
@import "@/assets/scss/variables.scss";

    .main {
        display: flex;
        justify-content: center;
        gap: 20px;

        @media (max-width: $netbook) {
            justify-content: space-between;
        }

        @media (max-width: $small) {
                justify-content: center;
                gap: 0;
            }

        &__title { 
            margin-bottom: 20px;
        }

        &__genresaside {

            @media (max-width: $small) {
                display: none;
            }
        }
        
        &__genres {
            display: none;

            @media (max-width: $small) {
                display:inherit;
                position: relative;
                background: pink;
            }
        }

        &__list {
            margin-bottom: 40px;
        }
    }

    .flex-wrap {
        display: flex;
        justify-content: space-between;
    }


    .genrelist {
    max-width: 200px;

    @media (max-width: $small) {
            display: none;
            position:absolute;
            // visibility: hidden;
            background: pink;
        }

    &__item {
        padding: 3px;
        padding-left: 10px;
        cursor: pointer;

        &:hover {
            border-radius: 5px;
            background: #ededee;
        }
    }

    .dropdown {

        @media (max-width: $small) {
            // display: unset !important;
            visibility: visible;
                // position: absolute;
                background: pink;
                z-index: 10;
            }
    }
}

    // .page {
    //     border: 1px solid teal;
    //     padding: 10px;
    // }

    // .current-page {
    //     color: white;
    //     background: teal;   
    // }
</style>