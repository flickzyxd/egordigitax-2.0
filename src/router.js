import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import App from "@/App.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: App }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})
export default router;
