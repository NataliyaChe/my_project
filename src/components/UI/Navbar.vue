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
        // max-width: 1050px;
        margin: 0 auto;
        padding: 10px 0;

        &__title {
            font-family: $main-font;
            font-size: 28px;
            font-weight: 700;
            color: $background-color;
            cursor: pointer;
        }
        

        
        // display: flex;
        // align-items: center;
        // padding: 0 15px;
    }
</style>