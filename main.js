import App from './App'
import Vue from 'vue'
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()