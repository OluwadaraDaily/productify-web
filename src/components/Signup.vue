<template>
  <div>
	<div class="logo-container">
		<img src="@/assets/logo.png" height="200">	
	</div>
    
    <div class="form-container">
		<div class="input-container">
			<input type="email" name="email" placeholder="Enter Email...">
		</div>
		
		<div class="input-container">
			<input type="text" name="username" placeholder="Enter Username...">
		</div>

		<div class="input-container">
			<input type="password" name="password" placeholder="Enter Password...">
		</div>
		<button class="login-btn">Register</button>
    </div>
  </div>
</template>

<script>
export default {
	name: "Login",
	components: {
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
