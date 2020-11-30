<template>
	<div>		
		<div v-if="cart" class="cart-header">
			<h4> Product Image </h4>
			<h4> Product Quantity </h4>
			<h4> Price </h4>
		</div>

		<div id="empty-cart" v-if="!cart">
			<h2> Cart is empty </h2>
			<h3>{{ cart }} 9087098098</h3>

		</div>
		<div v-if="cart">
			{{ cart }}
		</div>
		<div v-for="product in cart" :key="product.id" class="cart-item">
			<img v-if="!product.image_url" class="cart-item-image" src="@/assets/default.jpg">
			<img class="cart-item-image" :src="product.image_url">
			<p class="cart-item-quantity">1</p>
			<p class="cart-item-price">{{ product.price }}</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
	name: "Cart",

	components: {
  },

  async created () {
	const response = await axios.get('cart')
	this.products = response.data.order_items
	console.log(response.data.order_items)
  },

  computed: {
	...mapGetters(['cart'])
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cart-item, .cart-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		text-align: center;
		align-items: center;
		
	}
	.cart-header {
		border-bottom: 2px solid #333b59;
	}
	.cart-item {
		margin: 25px 0;
	}

	.cart-item-image {
		border-radius: 10px;
		height: 70px;
	}
	.cart-item-price, .cart-item-quantity {
		font-size: 20px;
		font-weight: bold;
	}
</style>
