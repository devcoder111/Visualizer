import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : () => import('./../views/VisualizerView.vue'),
        name : 'home'
    },
    {
        path : "/about",
        component : () => import('./../views/AboutView.vue'),
        name : 'about'
    },
   
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router