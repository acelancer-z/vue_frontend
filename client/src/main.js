import { createApp } from 'vue'
import { Steps, Button, Layout, Input, InputNumber, Select, Checkbox, Row, Col } from 'ant-design-vue'
import { createPinia } from 'pinia'

import { router } from './router'

import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import './assets/styles/main.scss'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .use(Steps)
    .use(Button)
    .use(Layout)
    .use(Input)
    .use(InputNumber)
    .use(Select)
    .use(Checkbox)
    .use(Row)
    .use(Col)
    .mount('#app')
