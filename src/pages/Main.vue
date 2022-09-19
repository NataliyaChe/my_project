<template>
    <div class="wrapper">
        <div>
            <div class="btns-container">
                <MyInput class="search_inp" v-model="searchQuery" placeholder="Search..."/>
                <MySelect v-model="selectedSort" :options="sortOptions"/>
            </div>
            <!-- <AnimeList :animes="animes"/> Эта строка нужна если сортировать через вотч-->
            <!-- <AnimeList :animes="sortedAnimes"/>  -->
            <AnimeList :animes="sortedSearchAnime"/> 
            <div class="page_container">
                <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" 
                :class="{
                    'current-page': page === pageNumber
                }" @click="changePage(pageNumber)">{{ pageNumber }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimeForm from '@/components/AnimeForm.vue';
import AnimeList from '@/components/AnimeList.vue';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';

 export default {
    components: {
        AnimeForm,
        AnimeList,
        MySelect,
        MyInput,
    },
    data() {
        return {
            animes: [],
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'By title'},
                {value: 'type', name: 'By type'},
                {value: 'episodes', name: 'By episodes'},
            ],
           
        }
    },
    methods: {
        createAnime(anime) {
            this.animes.push(anime);
        },
        changePage(pageNumber) {
            this.page = pageNumber
            this.fetchAnimes()
        },
        async fetchAnimes () {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/anime', {
                    params: {
                        page: this.page,
                        limit: this.limit
                    }
                });
                
                this.totalPages = response.data.pagination.last_visible_page
                console.log(response.data.pagination.last_visible_page
, 'test1')
                this.animes = response.data.data;
                console.log(response.data);
            } catch (e) {
                console.log(e)
                
            }
        }
    },
    mounted() {
        this.fetchAnimes();
    },
    computed: {
        sortedAnimes() {
            return [...this.animes].sort((anime1, anime2) => anime1[this.selectedSort]?.localeCompare(anime2[this.selectedSort]))
        },
        sortedSearchAnime() {
            return this.sortedAnimes.filter(anime => anime.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        // sortedAnimes() {
        //     return [...this.animes].sort((anime1, anime2) => anime2[this.selectedSort] - anime1[this.selectedSort])
        // }
    },
    watch: {
        // selectedSort(newValue) {
        //     this.animes.sort((anime1, anime2) => {
        //         return anime1[newValue]?.localeCompare(anime2[newValue])
        //     })
        //     console.log(this.animes, 'test');
        // }
    }
 }
</script>

<style>
    .btns-container {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    .search_inp {
        width: 300px;
    }

    .page_container {
        display: flex;
        margin-top: 15px;
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