<template>
  <div>
	<nav>
		<input type="checkbox" id="check">
		<label for="check" class="checkbtn">
			<i class="fas fa-bars"></i>
		</label>
		<label class="logo">Productify</label>
		<ul v-if="!user">
      <li><a> <router-link to="/login"> Login </router-link> </a></li>
      <li><a> <router-link to="/signup"> Sign Up </router-link> </a></li>
    </ul>

    <ul v-if="user">
      <li><a><router-link to="/"> Home </router-link></a></li>
      <li><a><router-link to="/cart"> Cart </router-link> </a></li>
      <li><a href="javascript:void(0)" @click="logOut"> Logout </a></li>
    </ul>

	</nav>    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	name: 'Navbar',

  methods: {
    async logOut() {
      await localStorage.removeItem('token');
      this.$store.dispatch('user', null)
      this.$router.push('/login')
    }
  },

  computed: {
    ...mapGetters(['user'])
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body{
  font-family: "Montserrat", sans-serif;
}
nav{
  background: #333b59;
  height: 80px;
  width: 100%;
}
label.logo{
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
nav ul{
  float: right;
  margin-right: 20px;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a{
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,a:hover{
  background-color: white;
	color: #333b59;
  transition: .5s;
}
.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){
  label.logo{
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a{
    font-size: 20px;
  }
  a:hover,a.active{
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul{
    left: 0;
  }
}
</style>
