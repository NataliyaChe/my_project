import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import AnimePage from "@/pages/AnimePage.vue";
import SingleAnimePage from "@/pages/SingleAnimePage.vue";
import CompositionAnimePage from "@/pages/CompositionAnimePage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    // {
    //     path: '/animes',
    //     component: AnimePage
    // },
    {
        path: '/animes/:id',
        component: SingleAnimePage
    },
    {
        path: '/genres/:id',
        component: SingleAnimePage
    },
    {
        path: '/composition',
        component: CompositionAnimePage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;