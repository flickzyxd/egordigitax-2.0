import {createMemoryHistory, createRouter} from 'vue-router'

import Home from './pages/Home.vue'
import Card from "@/pages/Card.vue";
import New from "@/pages/New.vue";


const routes = [
    {
        name: 'Главная',
        path: '/',
        component: Home
    },
    {
        name: 'Card',
        path: '/card',
        component: Card
    },
    {
        name: 'New',
        path: '/new',
        component: New
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})
export default router;
