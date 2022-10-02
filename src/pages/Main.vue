<template>
    <div>
        <!-- <Navbar @getLetter="fetchSearchAnimeList"></Navbar> -->
    
    <main class="main container">
        <div class="main__content">
            <div class="flex-wrap">
                <h2 class="main__title main__description title">Anime list <span v-if="seen">sort by genre: {{ message }}</span></h2>
                <h2 class="main__title main__genres title"  v-on:click="isActive=!isActive">Genres</h2>
            </div>
            <AnimeList class="main__list" :animes="animes" :letter="letter" /> 
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
            <GenresList class="genrelist" v-bind:class="{dropdown: isActive}" v-on:click="isActive=false" :genres="genres" @getID="fetchAnimesByGenre"></GenresList>
        </aside>
    </main>
</div>
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
import Navbar from "@/components/UI/Navbar.vue";

export default {
    components: {
        AnimeForm,
        AnimeList,
        MySelect,
        MyInput,
        MyButton,
        VueTailwindPagination,
        GenresList,
        Navbar,
    },
    props: ['letter'],
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
            isActive : false,    
            letter: '',  
        }
    },
    methods: {
        changePage(pageNumber) {
            this.page = pageNumber;
            if(this.activeGenreId) {
                this.fetchAnimesByGenre(this.activeGenreId, this.genreName)
            } else if (this.letter) {
                this.fetchSearchAnimeList (this.letter)
            } else {
                this.fetchAnimes()
            }
        },
        async fetchAnimes () {
            try {
                
                const response = await axios.get('https://api.jikan.moe/v4/top/anime', {
                    params: {
                        page: this.page,
                        limit: this.limit,
                        letter: this.letter
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
                this.seen = false
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
    //     async fetchSearchAnimeList (letter) {
    //         console.log('fetchSearchAnimeList', this.letter);
    //         if(!letter) {
    //             this.letter = ''
    //             return this.fetchAnimes ()
    //         }
    //         this.letter = letter
            
    //         const response = await axios.get('https://api.jikan.moe/v4/anime', {
    //                 params: {
    //                     page: this.page,
    //                     limit: this.limit,
    //                     letter: this.letter
    //             }
    //         });
            
    //         this.totalPages = response.data.pagination.items.total
    //         this.animes = response.data.data;   
    //     },
    },
    mounted() {
        
        this.fetchAnimes();
        this.fetchGenres();
    },
    computed() {
        console.log('letter in computed', this.letter);
        if (letter = true) {
            this.fetchSearchAnimeList(letter);
        } else {
            this.fetchAnimes();
    }
}
 }
</script>

<style lang="scss">
@import "@/assets/scss/sizing.scss";
@import "@/assets/scss/variables.scss";

    .main {
        display: flex;
        justify-content: center;
        gap: 20px;
        position: relative;

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

        &__description {
            @media (max-width: $small) {
                max-width: 60%;
            }
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
                cursor: pointer;
            }
        }

        &__list {
            margin-bottom: 40px;
        }
    }
</style>