<template>
  <div>
	<div v-if="notification" id="notification">
		{{ notification }}
	</div>
	<div class="logo-container">
		<img src="@/assets/logo.png" height="200">	
	</div>
    
    <div class="form-container">
		<form method="POST" @submit.prevent="signUp">

			<div class="input-container">
				<input type="email" name="email" v-model="email" placeholder="Enter Email...">
			</div>

			<div class="input-container">
				<input type="tel" name="phone" v-model="phone" placeholder="Enter Telephone Number...">
			</div>
			
			<div class="input-container">
				<input type="text" name="username" v-model="username" placeholder="Enter Username...">
			</div>

			<div class="input-container">
				<input type="password" name="password" v-model="password" 
				placeholder="Enter Password...">
			</div>
			<button class="login-btn">Register</button>
		</form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: "Signup",
	components: {
  },
  data () {
	return {
		email: "daraoloye99@gmail.com",
		phone: "08101217017",
		username: "Oluwadara",
		password: "oluwadara",
		notification: null
	}
  }, 
  methods: {  	
	async signUp() {

		const body = {
		email: this.email,
		phone: this.phone,
		username: this.username,
		password: this.password,
		notification: null
		}

		const response = await axios.post('register', body)

		console.log(response)

		if(response.data.message == "Already existing account") {
			let notification = document.getElementById("notification")
			notification.className += "alert alert-danger"
			this.notification = response.data.message	
		}

		else {
			let notification = document.getElementById("notification")
			notification.className += "alert alert-success"
			console.log(response.data)
			this.notification = "You are now registered!"
			this.$router.push('/login')
		}

	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
	margin: 0;
	padding: 0;
	overflow: scroll;
}
div.logo-container {
	margin: 0 auto;
	text-align: center;
	margin-bottom: 20px;
}
div.form-container {
	width: 80%;
	margin: 0 auto;
}
.input-container{
	margin-bottom: 30px;
	width: 100%;
}
input {
	width: 100%;
	padding: 10px 0;
	font-size: 15px;
	border: 0;
	outline: none;
	border-bottom: 2px solid #333b59;
}
button {
	background: #333b59;
	color: white;
	border: 0;
	border-radius: 5px;
	text-transform: uppercase;
	padding: 8px 0;
	width: 100%;
}
</style>
