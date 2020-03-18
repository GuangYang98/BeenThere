<template>
	<div class="header-block" id="header-block">
		<div v-if="getWidth()>800">
			<a href="/">
				<img src="../assets/logo.png" class="header-logo" id="logo" style="width: 296px; height: 100px; margin-top: 20px;">
			</a>
			<div class="header-text-nav" id="nav" style="font-size: 27px;">
				<a class="header-home" href="/">主页</a>
				<a class="header-members" href="/family">Beenthere大家庭</a>
				<a class="header-join" href="/join">我要加入</a>
			</div>
		</div>
		<div v-else>
			<a href="/">
				<img src="../assets/logo.png" class="header-logo" id="logo" style="width: 29.6vw; height: 10vw; margin-top: 2vw;">
			</a>
			<div class="header-text-nav" id="nav" style="font-size: 3vw;">
				<a class="header-home" href="/">主页</a>
				<a class="header-members" href="/family">Beenthere大家庭</a>
				<a class="header-join" href="/join">我要加入</a>
			</div>
		</div>

	</div>
</template>

<script>
	// import Menu from "./Menu.vue"
	
	
	
	export default {
		name: "Header",
		components:{
			// Menu,
		},
		methods: {
			getWidth(){
				return document.documentElement.clientWidth;
			}
		}
	}
</script>

<style>
	.header-block{
		background-color: #2892b8;
		/* background-color: #EF6C00; */
		width: 100%;
		font-family: Roboto;
	}
	.header-logo{
		margin-left: 1.3vw;
		float: left;
		display: inline;
		/* background-color: red; */
	}
	.header-text-nav{
		float:right; 
		margin-right: 4vw;
		-webkit-transition-property:display;
		-webkit-transition-duration:1s;
		-webkit-transition-timing-function: ease;
	}
	.header-home{
		display: inline;
		font-weight: bold;
		color: white;
		margin-right: 2.5vw;
	}
	.header-members{
		display: inline;
		font-weight: bold;
		color: white;
		margin-right: 2.5vw;
	}
	.header-join{
		display: inline;
		font-weight: bold;
		padding: 1.2vw;
		-webkit-transition-property:background-color, color;
		-webkit-transition-duration:0.5s;
		-webkit-transition-timing-function: ease;
		color: #ffce8f;
		-webkit-font-smoothing: antialiased;
		border: 2px solid #ffce8f;
		border-radius: 5vw;
	}
	.header-join:hover{
		background-color: #ffce8f;
		color: black;
	}
	.header-scaled-menu{
		float:right;
		margin-right: 4vw; 
	}
	a{
		text-decoration: none;
	}
</style>
