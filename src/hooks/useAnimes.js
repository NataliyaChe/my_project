import axios from "axios";
import {ref, onMounted} from 'vue';


export function useAnimes(limit) {
    const animes = ref([])   
    const totalPages = ref([0]) 
    const fetching = async () => {
        try {
            const response = await axios.get('https://api.jikan.moe/v4/anime', {
                params: {
                    page: 1,
                    limit: limit
                }
            });   
            totalPages.value = response.data.pagination.last_visible_page
            console.log(response.data.pagination.last_visible_page, 'test1')
            animes.value = response.data.data;
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    }
    onMounted(fetching) 
    return {
        animes, totalPages
    }
}
