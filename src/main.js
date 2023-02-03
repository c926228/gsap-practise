import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSRulePlugin, CSSPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
