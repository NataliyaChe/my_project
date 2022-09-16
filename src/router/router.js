import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import AnimePage from "@/pages/AnimePage.vue";
import SingleAnimePage from "@/pages/SingleAnimePage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/animes',
        component: AnimePage
    },
    {
        path: '/animes/:id',
        component: SingleAnimePage
    },
    // data.mal_
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;