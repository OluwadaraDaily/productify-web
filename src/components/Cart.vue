<template>
	<div>
	<table v-if="cart" class="table">
		<thead>
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Item Image</th>
				<th scope="col">Item Name</th>
				<th scope="col">Quantity</th>
				<th scope="col">Price</th>
			</tr>
		</thead>

		<tbody>
			<tr v-for="product in cart" :key="product.id">
				<td scope="row">{{ product.id }}</td>
				<td><img v-if="!product.image_url" class="cart-item-image" src="@/assets/default.jpg">
				<img v-if="product.image_url" class="cart-item-image" :src="product.image_url"></td>
				<td>{{ product.name }}</td>
				<td>{{ product.qty }}</td>
				<td>{{ product.price }}</td>
			</tr>
		</tbody>
	</table>

		<div id="empty-cart" v-if="!cart">
			<h2> Cart is empty </h2>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: "Cart",

	components: {
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
