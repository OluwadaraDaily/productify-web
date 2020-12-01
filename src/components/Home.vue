<template>
  <div>
    <div>
      <h3 id="greet" v-if="user"> Hello, {{ user.username }} </h3>
      <h3 v-if="!user"> You are not logged in  </h3>  
    </div>
    
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img class="product-image" :src="product.image_url">
        <p class="product-description"> {{ product.name }}</p>
        <p class="product-price">{{ product.price }}</p>
        <button @click="addToCart(product.id, product.name, product.price, product.image_url)" class="add-to-cart-btn"> Add to Cart </button>
      </div>
    </div>        
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',

  data () {
    return {
      products: null,
    }
  },

  created () {
	if(!this.user) {
		this.$router.push('login')
	}
},

  async mounted () {
		
      const response = await axios.get('api/products')
      this.products = response.data
    },
  
  methods: {
    async addToCart (id, name, price, image_url) {

      console.log(id, name, price, image_url)

      this.$store.dispatch('addToCart', {
		id: id,
		name: name,
		price: price,
		image_url: image_url
      })

      
      // const response1 = await axios.get('cart')
      // this.products = response.data.order_items
      // console.log(response.data.order_items)

      // const body = {
      //   id: id
      // }

      // const response2 = await axios.post('cart', body)
      

      // response1.data.order_items.push(response2.data.order_item)

      // console.log(response1.data.order_items);
      // console.log(response2.data.order_items);

      // this.$store.dispatch('cart', response2.data.order_items)
    }
  },

  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #greet {
    margin: 18px 0;
    text-align: center;
    color: #333b59;
  }
  .product-container {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .product-card {
    text-align: center;
    margin: 0 auto;
    height: 300px;
    width: 300px;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: -1px 5px 18px 0px rgba(0,0,0,1);
    -moz-box-shadow: -1px 5px 18px 0px rgba(0,0,0,1);
    box-shadow: -1px 5px 18px 0px rgba(0,0,0,1);
    margin-bottom: 25px;
  }
  .product-image {
    margin: 0;
    border-radius: 5px;
    height: 180px;
    width: 100%;
  }
  .product-description {
    margin: 0;
    text-align: center; 
  }
  .product-price {
    margin: 0;
    margin-top: 5px;
    font-weight: bolder;
  }
  .add-to-cart-btn {
    padding: 8px;
    width: 80%;
    text-transform: uppercase;
    background: #333b59;
    color: white;
    border: 0;
    border-radius: 5px;
    margin: 10px 0;
  }
  .popup .overlay {
  position:fixed;
  top:0px;
  left:0px;
  width:100vw;
  height:100vh;
  background:rgba(0,0,0,0.7);
  z-index:1;
  display:none;
}

.popup .content {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%) scale(0);
  background:#fff;
  width:500px;
  height:250px;
  z-index:2;
  text-align:center;
  padding:20px;
  box-sizing:border-box;
  font-family:"Open Sans",sans-serif;
}

.popup .close-btn {
  cursor:pointer;
  position:absolute;
  right:50px;
  top:20px;
  width:30px;
  height:30px;
  background:#222;
  color:#fff;
  font-size:25px;
  font-weight:600;
  line-height:30px;
  text-align:center;
  border-radius:50%;
}

.popup.active .overlay {
  display:block;
}

.popup.active .content {
  transition:all 300ms ease-in-out;
  transform:translate(-50%,-50%) scale(1);
}
</style>
