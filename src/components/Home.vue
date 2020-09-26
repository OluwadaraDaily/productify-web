<template>
  <div>
    <div class="popup" id="popup-1">
      <div class="overlay"></div>
      
      <div class="content">
        <div class="close-btn" @click="togglePopup">&times;</div>
        <h1>Added to Cart!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur laborum rem sed laudantium excepturi veritatis voluptatum architecto, dolore quaerat totam officiis nisi animi accusantium alias inventore nulla atque debitis.</p>
      </div>
    </div>
    
    <div class="product-container">
      <div class="product-card">
        <img class="product-image" src="@/assets/product-1.jpg">
        <p class="product-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="product-price">$19.99</p>
        <button @click="togglePopup" class="add-to-cart-btn"> Add to Cart </button>
      </div>

      <div class="product-card">
        <img class="product-image" src="@/assets/product-2.jpg">
        <p class="product-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="product-price">$19.99</p>
        <button @click="togglePopup" class="add-to-cart-btn"> Add to Cart </button>
      </div>

      <div class="product-card">
        <img class="product-image" src="@/assets/product-3.jpg">
        <p class="product-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="product-price">$19.99</p>
        <button @click="togglePopup" class="add-to-cart-btn"> Add to Cart </button>
      </div>

      <div class="product-card">
        <img class="product-image" src="@/assets/product-4.jpg">
        <p class="product-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="product-price">$19.99</p>
        <button @click="togglePopup" class="add-to-cart-btn"> Add to Cart </button>
      </div>
    </div>        
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    togglePopup() {
      document.getElementById("popup-1").classList.toggle("active");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
