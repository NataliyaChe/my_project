<template>
    <div class="wrapper">
        <main class="main">
            <div class="animelist">
                <p v-if="seen">Sort by genre: {{ message }}</p>
                <!-- <div class="btns-container">
                <MyInput class="search_inp" v-model="searchQuery" placeholder="Search..."/>
                <MySelect v-model="selectedSort" :options="sortOptions"/>
                </div> -->
                <AnimeList :animes="animes"/> 
                <VueTailwindPagination 
                    :current="page" 
                    :total="totalPages" 
                    :per-page="limit" 
                    @page-changed="pageChange($event)">
                </VueTailwindPagination>
            </div>
            <aside class="aside">
                <GenresList :genres="genres" @getID="getGenreID"></GenresList>
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
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 8,
            totalPages: 0,
            genres: [],
            selectGenres: null,
            genre: '',
            seen: false,
            // filterGenres: {value: 'genres.mal_id'},
            // sortOptions: [
            //     {value: 'title', name: 'By title'},
            //     {value: 'type', name: 'By type'},
            //     {value: 'episodes', name: 'By episodes'},
            // ],
           
        }
    },
    methods: {
        pageChange(pageNumber) {
            this.page = pageNumber;
            if(this.selectGenres) {
                this.getGenreID(this.selectGenres)
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
                console.log('response', response.data.data);
                
            } catch (e) {
                console.log(e)
                
            }
        },
        async fetchGenres () {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/genres/anime');

                this.genres = response.data.data;
                console.log('genres', response.data.data);
                
            } catch (e) {
                console.log(e)   
            }
        },
        async getGenreID (id, name) {
            this.seen = true
            this.message = name
            this.selectGenres = id, name
            console.log('select genres', id, name);
            try {
                const response = await axios.get('https://api.jikan.moe/v4/anime', {
                    params: {
                        page: this.page,
                        limit: this.limit,
                        genres: id,
                    }
                });
                
                this.totalPages = response.data.pagination.items.total
                this.animes = response.data.data;
                console.log('fetch id', id);
                console.log('fetch resGenre', response.data.data);
                
            } catch (e) {
                console.log(e)
                
            }
        },
        // renderGenres() {
        //     return this.genres
        // }
    },
    mounted() {
        this.fetchAnimes();
        this.fetchGenres();
    },
    // updated() {
    //     this.getGenreID()
    // },
    computed: {

        // sortedAnimes() {
        //     return [...this.animes].sort((anime1, anime2) => anime1[this.selectedSort]?.localeCompare(anime2[this.selectedSort]))
        // },
        // sortedSearchAnime() {
        //     return this.sortedAnimes.filter(anime => anime.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        // },
        // sortedAnimes() {
        //     return [...this.animes].sort((anime1, anime2) => anime2[this.selectedSort] - anime1[this.selectedSort])
        // }
    },
 }
</script>

<style>
    

    .main {
        display: flex;
        gap: 40px;
    }

    .page {
        border: 1px solid teal;
        padding: 10px;
    }

    .current-page {
        color: white;
        background: teal;   
    }
</style>