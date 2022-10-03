<template>
    <div class="search">
        <MyInput class="search__input" v-model="letter" type="text" />
        <MyButton class="search__button" @click="searchTitle">Search</MyButton>
    </div>
</template>

<script>
    import MyInput from '@/components/UI/MyInput.vue';
    import MyButton from '@/components/UI/MyButton.vue';

    export default {
        name: 'Search',
        components: {
            MyInput,
            MyButton,
        },
        data() {
            return {
                letter: '',
            }
    },
    methods: {
        searchTitle(event) {
            console.log('letter', this.letter);
            this.$emit('getLetter', this.letter)
        },
    }
 }
    
</script>

<style scoped lang="scss">
    @import "@/assets/scss/sizing.scss";
    @import "@/assets/scss/variables.scss";

    .search {
        // background: yellowgreen;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;

        &__input {
            border: 1px solid $font-color;
        }
    }
</style>

