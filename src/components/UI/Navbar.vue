<template>
    <div class="navbar container flex-wrap">
        <div class="navbar__title" @click="$router.push('/')">AnimeList</div>
        <!-- <div class="navbar__btns">
            <MyButton @click="$router.push('/composition')">Clickй</MyButton>
        </div> -->
        <div class="navbar__search-wrap flex-wrap">
            <MyInput class="navbar__search-inp" v-model="letter" type="text" />
            <MyButton class="navbar__search-btn" @click="searchTitle">Search</MyButton>
        </div>
    </div>
</template>

<script>
import MyInput from './MyInput.vue';
import MyButton from './MyButton.vue';
 export default {
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
@import "@/assets/scss/variables.scss";

    .navbar {
        margin: 0 auto;
        padding: 20px 0;
        background: inherit;
        background-color: $main-color;
        // margin: 0;
        box-shadow: 2px 2px 4px gray;

        &__title {
            font-family: $main-font;
            font-size: 36px;
            font-weight: 700;
            color: $background-color;
            cursor: pointer;
        }

        &__search-wrap {
            gap: 20px;
        }
    }
</style>