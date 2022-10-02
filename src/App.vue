<template>
    <!-- <div class="header">
        <Navbar></Navbar>
    </div> -->
    <Navbar @getLetter="getLetter"></Navbar>
    <router-view></router-view>
</template>

<script>
    import Navbar from "@/components/UI/Navbar.vue";
    export default {
        components: {
            Navbar,
        },
        data() {
        return {
            letter: '',
            
        }
    },
        methods: {
            getLetter(inpLetter) {
                console.log('letter fron navbar', this.letter);
                this.letter = inpLetter;
            }
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