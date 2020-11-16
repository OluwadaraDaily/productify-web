import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import  routes from './routes'
// import VueAxios from './plugins/axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(VueAxios)

// export const axios = axios

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
