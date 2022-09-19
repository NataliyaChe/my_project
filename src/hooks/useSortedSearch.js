import {ref, computed} from 'vue';

export default function useSorted(sortedAnimes) {
    const searchQuery = ref('')
    const sortedSearchAnime = computed(() => {
        return sortedAnimes.value.filter(anime => anime.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })
    return {
        searchQuery, sortedSearchAnime
    }
};