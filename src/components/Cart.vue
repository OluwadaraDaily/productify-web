<template>
	<div>
		<div class="cart-header">
			<h1> Product Image </h1>
			<h1> Product Quantity </h1>
			<h1> Total Price </h1>
		</div>

		<div class="cart-item">
			<img class="cart-item-image" src="@/assets/product-5.jpg">
			<!-- <p class="cart-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> -->
			<p class="cart-item-quantity">2</p>
			<p class="cart-item-price">$39.99</p>
		</div>
		<div class="cart-item">
			<img class="cart-item-image" src="@/assets/product-6.jpg">
			<p class="cart-item-quantity">5</p>
			<p class="cart-item-price">$339.99</p>
		</div>

		<div class="cart-item">
			<img class="cart-item-image" src="@/assets/product-7.jpg">
			<p class="cart-item-quantity">3</p>
			<p class="cart-item-price">$39.99</p>
		</div>

		<div class="cart-item">
			<img class="cart-item-image" src="@/assets/product-8.jpg">
			<p class="cart-item-quantity">8</p>
			<p class="cart-item-price">$3339.99</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cart",
	components: {
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
