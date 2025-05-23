import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'

createApp(App).use(vuetify).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')

