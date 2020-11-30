import VueRouter from 'vue-router';
import Vue from 'vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Cart from './components/Cart.vue'
import Signup from './components/Signup.vue'

Vue.use(VueRouter)


export default new VueRouter ({
	mode: 'history',
	routes: [
		{path: "/", component:Home},
		{path: "/login", component:Login},
		{path: "/cart", component:Cart},
		{path: "/signup", component:Signup}
	]	
})