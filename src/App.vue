<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@font-face {
	font-family: "Montserrat";
	src: local("Montserrat"),
   url(./fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}


</style>
