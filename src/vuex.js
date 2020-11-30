import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	user: null,
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

	cart(state, cart) {
		state.cart.push(cart);	
	}
};

const actions = {
	user(context, user) {
		context.commit('user', user);
	},

	cart(context, cart) {
		context.commit('cart', cart)
	}
};

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;