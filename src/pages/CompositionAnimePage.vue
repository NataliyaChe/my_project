<template>
    <div class="wrapper">
        <div>
            <div class="btns-container">
                <MyInput class="search_inp" v-model="searchQuery" placeholder="Search..."/>
                <MySelect v-model="selectedSort" :options="sortOptions"/>
            </div>
            <AnimeForm />
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
import {ref} from 'vue';
import {useAnimes} from '@/hooks/useAnimes.js';
import useSorted from '@/hooks/useSorted.js';
import useSortedSearch from '@/hooks/useSortedSearch.js';

 export default {
    components: {
        AnimeForm,
        AnimeList,
        MySelect,
        MyInput,
    },
    data() {
        return {
            // animes: [],
            // selectedSort: '',
            // searchQuery: '',
            // page: 1,
            // limit: 10,
            // totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'By title'},
                {value: 'type', name: 'By type'},
                {value: 'episodes', name: 'By episodes'},
            ],
           
        }
    },
    setup(props) {
        const {animes, totalPages} = useAnimes(10);
        const {selectedSort, sortedAnimes} = useSorted(animes);
        const {searchQuery, sortedSearchAnime} = useSortedSearch(sortedAnimes);
        
        return {
            animes,
            totalPages,
            sortedAnimes,
            selectedSort,
            searchQuery,
            sortedSearchAnime
        }
    }
 }
</script>

<style>
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .main {
        padding: 20px;
        
    } */

    .btns-container {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
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