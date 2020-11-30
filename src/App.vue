<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Navbar
  },

  async created () {
    const response = await axios.get('user')

    this.$store.dispatch('user', response.data)
  },

  mounted () {
    
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
