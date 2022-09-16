<template>
    <form @submit.prevent>
            <h4 class="form__title">Add anime</h4>
            <MyInput v-model="anime.title" type="text" placeholder="Title"/>
            <MyInput v-model="anime.type" type="text" placeholder="Type"/>
            <MyInput v-model="anime.episodes" type="text" placeholder="Episodes"/>
            <MyButton class="btn" @click="createAnime">Create</MyButton>
        </form>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
 export default {
    components: {
        MyButton,
    },
    data() {
        return {
            anime: {
                title: '',
                type: '',
                episodes: '',
            }
        }
        
    },
    methods: {
        createAnime() {
            this.anime.mal_id = Date.now();
            this.$emit('create', this.anime)
            this.anime = {
                title: '',
                type: '',
                episodes: '',
            }
        }
    }
 }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    .form__title {
        margin-bottom: 15px;
    }

</style>