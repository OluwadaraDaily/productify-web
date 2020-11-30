import Vue from 'vue'
import App from './App.vue'
import  router from './routes'
import store from './vuex'
import axios from 'axios'

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://productify-app.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
