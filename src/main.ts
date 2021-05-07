import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import VueWechatTitle from 'vue-wechat-title'
import App from './App.vue'
import Vant from "vant"
import 'vant/lib/index.css'
createApp(App)
    .use(router)
    .use(Vant)
    .use(store)
    .use(VueWechatTitle)
    .mount('#app')