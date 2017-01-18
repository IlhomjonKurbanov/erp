import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/hello', component: Hello }
]

const router = new VueRouter({
	routes
})



const app = new Vue({
	  router
}).$mount('#app')


/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
