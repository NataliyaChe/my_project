<template>
    <div class="navbar container">
        <div class="navbar__title" @click="$router.push('/')">AnimeList</div>
    </div>
</template>

<script>
    
</script>

<style scoped lang="scss">
    @import "@/assets/scss/sizing.scss";
    @import "@/assets/scss/variables.scss";

    .navbar {
        padding: 10px 0;
        margin: 0 auto;
        background: inherit;

        &__title {
            font-family: $main-font;
            font-size: 36px;
            font-weight: 700;
            color: $background-color;
            cursor: pointer;
        }
    }
</style>