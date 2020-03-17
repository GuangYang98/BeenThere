<template>
	<div class="header-block" id="header-block">
		<a href="/">
			<img src="../assets/logo.png" class="header-logo" id="logo">
		</a>
		
		<Menu id="scaled-menu" class="header-scaled-menu" style="display: none;"/>
		<div class="header-text-nav" id="nav" style="display: none;">
			<a class="header-home" href="/">主页</a>
			<a class="header-members" href="/family">Beenthere大家庭</a>
			<a class="header-join" href="/join">我要加入</a>
		</div>
	</div>
</template>

<script>
	import Menu from "./Menu.vue"
	
	
	
	export default {
		name: "Header",
		components:{
			Menu,
		},
		mounted: () => {
		}
	}
</script>

<style>
	.header-block{
		background-color: #2892b8;
		/* background-color: #EF6C00; */
		width: 100%;
		height: 140px;
		line-height: 140px;
		font-family: Roboto;
	}
	.header-logo{
		width: 296px;
		height: 100px;
		margin-top: 20px;
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
		font-size: 27px;
		font-weight: bold;
		color: white;
		margin-right: 25px;
	}
	.header-members{
		display: inline;
		font-weight: bold;
		font-size: 27px;
		color: white;
		margin-right: 25px;
	}
	.header-join{
		display: inline;
		font-size: 27px;
		font-weight: bold;
		padding: 20px;
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
