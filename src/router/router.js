import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import SingleAnimePage from "@/pages/SingleAnimePage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/animes/:id',
        component: SingleAnimePage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;