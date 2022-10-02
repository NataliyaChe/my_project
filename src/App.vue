<template>
    <div class="header">
        <Navbar></Navbar>
    </div>
    <router-view></router-view>
</template>

<script>
    import Navbar from "@/components/UI/Navbar.vue";
    export default {
        components: {
            Navbar,
        }
    }
</script>

<style lang="scss">
    @import "@/assets/scss/variables.scss";

    .header {
        background-color: $main-color;
        // margin: 0;
        box-shadow: 2px 2px 4px gray;
    }

    .main {
    
    }
</style>