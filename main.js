import Vue from 'vue'
import App from './App'
import axios from 'axios'


import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)


import shop from './pages/shop/index.vue'
Vue.component('shop',shop)

import my from './pages/my/index.vue'
Vue.component('my',my)
 

import location from './pages/localhost/home.vue'
Vue.component('location',location)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.prototype.axios = axios;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



