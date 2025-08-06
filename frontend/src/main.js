import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Vue3ConfirmDialog from 'vue3-confirm-dialog';
import 'vue3-confirm-dialog/style';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vue3ConfirmDialog);
app.component('vue3-confirm-dialog', Vue3ConfirmDialog.default)
app.mount('#app')

