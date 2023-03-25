import { createApp } from 'vue'
import { createPinia } from 'pinia'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import App from './App.vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind.css'

gsap.registerPlugin(CSSRulePlugin, CSSPlugin, ScrollTrigger, ScrollToPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
