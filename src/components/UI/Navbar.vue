<template>
    <div class="navbar container">
        <div class="navbar__title" @click="$router.push('/')">AnimeList</div>
        <!-- <div class="navbar__btns">
            <MyButton @click="$router.push('/composition')">Clickй</MyButton>
        </div> -->
    </div>
</template>

<script>
 export default {
    
 }
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

    .navbar {
        margin: 0 auto;
        padding: 10px 0;
        background: inherit;

        &__title {
            font-family: $main-font;
            font-size: 28px;
            font-weight: 700;
            color: $background-color;
            cursor: pointer;
        }
    }
</style>