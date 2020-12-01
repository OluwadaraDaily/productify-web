import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	user: null,
	order_item:{id:'', name:'', price:0, image_url:'', qty:0},
	cart: []
};

const getters = {
	user: (state) => {
		return state.user;
	},

	cart: (state) => {
		return state.cart;
	}
};

const mutations = {
	user(state, user) {
		state.user = user;
	},

	addToCart: (state, payload) => {
		Vue.set(state.order_item, 'id', payload.id);
		Vue.set(state.order_item, 'name', payload.name);
		Vue.set(state.order_item, 'price', payload.price);
		Vue.set(state.order_item, 'image_url', payload.image_url);
		Vue.set(state.order_item, 'qty', 1);
		state.cart.push(payload)
	}
};

const actions = {
	user(context, user) {
		context.commit('user', user);
	},

	addToCart: (context, payload) => {
		context.commit('addToCart', payload)
	}
};

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;