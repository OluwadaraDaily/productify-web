import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Cart from './components/Cart.vue'
import Signup from './components/Signup.vue'
export default [
	{path: "/", component:Home},
	{path: "/login", component:Login},
	{path: "/cart", component:Cart},
	{path: "/signup", component:Signup}
]