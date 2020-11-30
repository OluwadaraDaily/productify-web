<template>
  <div>
	<div id="notification">
		{{ notification }}
	</div>

	<div class="logo-container">
		<img src="@/assets/logo.png" height="200">	
	</div>
    
    <div class="form-container">
		<form method="POST" @submit.prevent="logIn">
			<!-- {{ csrfField() }} -->
			<div class="input-container">
				<input type="email" name="email" v-model="email" placeholder="Enter Email...">
			</div>

			<div class="input-container">
				<input type="password" name="password" v-model="password" 
				placeholder="Enter Password...">
			</div>
			<button class="login-btn">Login</button>
		</form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	name: "Login",
	data () {
		return {
			email: "daraoloye99@gmail.com",
			password: "password",
			notification: null
		}
	},
	components: {
  },
  methods: {
	async logIn () {
		const body = {
			email: this.email,
			password: this.password
		}

		const response = await axios.post('login', body)
		if (!response.data.error) {
			console.log(response)
			localStorage.setItem('token', response.data.access_token.token)
			this.$store.dispatch('user', response.data.user)
			this.$router.push('/')	
		}
		else {
			
			let notification = document.getElementById('notification');
			notification.className += 'alert alert-danger';
			this.notification = "Incorrect Email or Password";
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
}
div.logo-container {
	margin: 0 auto;
	text-align: center;
	margin-bottom: 30px;
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
.auth-links{
	display: flex;
	justify-content: space-between;
	flex-direction: row;
}
.auth-links p {
	font-size: 16px;
}
.auth-links p:hover {
	color: #333b59;
	background: none;
	transition: .5s;
	cursor: pointer;
}
</style>
