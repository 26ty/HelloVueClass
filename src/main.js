import './assets/main.css'

import { createApp } from 'vue'

//從一個單文件組件中導入根組件(root)
import App from './App.vue'

const app = createApp({
    /* 根組件選項 */
})

/*
    * mount()方法渲染，接收“容器”參數
    * 在整個應用配置和資源註冊完成後才調用
*/
createApp(App).mount('#app')

