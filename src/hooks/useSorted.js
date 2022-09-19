import {ref, computed} from 'vue';

export default function useSorted(animes) {
    const selectedSort = ref('')
    const sortedAnimes = computed(() => {
        return [...animes.value].sort((anime1, anime2) => anime1[selectedSort.value]?.localeCompare(anime2[selectedSort.value]))
    })
    return {
        selectedSort, sortedAnimes
    }
};