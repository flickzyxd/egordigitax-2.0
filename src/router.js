import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import newCollectionOnHomePage from './pages/newCollectionOnHomePage.vue'


const routes = [
    { path: '/', component: Home, name: 'Главная' },
    { path: '/details', component: newCollectionOnHomePage, name: 'Детали'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
