import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import newCollectionOnHomePage from './pages/NewCollectionOnHomePage.vue'
import ProductPage from "@/pages/ProductPage.vue";

const routes = [
    { path: '/', component: Home, name: 'Главная' },
    { path: '/details', component: newCollectionOnHomePage, name: 'Детали'},
    { path: '/clothing', name: 'Одежда'},
    { path: '/bags', name: 'Сумки'},
    { path: '/accessories', name: 'Аксессуары'},
    { path: '/jewellery', name: 'Ювелирные изделия'},
    { path: '/legit', name: 'Легит'},
    { path: '/product/:id', component: ProductPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
