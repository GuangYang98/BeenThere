<template>
	<div class="header-block" id="header-block">
		<img src="../assets/logo.png" class="header-logo" id="logo">
		<Menu id="scaled-menu" style="float:right; 
		margin-right: 4vw; display: inline;"/>
		<div class="header-text-nav" id="nav">
			<a class="header-home" href="">主页</a>
			<a class="header-members" href="about">Beenthere大家庭</a>
			<a class="header-join" href="https://beentherebuddy.com/711943786725">我要加入</a>
		</div>
	</div>
</template>

<script>
	import Menu from "./Menu.vue"
	
	window.onload = function () {
		if(document.documentElement.clientWidth < 500) {
			// document.getElementById("nav").style.visibility="hidden";
			document.getElementById("nav").style.display="none";
			document.getElementById("scaled-menu").style.display="";
		}else{
			// document.getElementById("nav").style.visibility="visible";
			document.getElementById("nav").style.display="";
			document.getElementById("scaled-menu").style.display="none";
		}
		
	}
	
	window.onresize = function () {
		// console.log("宽度：" + document.documentElement.clientWidth);
		if(document.documentElement.clientWidth < 500) {
			// document.getElementById("nav").style.visibility="hidden";
			document.getElementById("nav").style.display="none";
			document.getElementById("scaled-menu").style.display="";
		}else{
			// document.getElementById("nav").style.visibility="visible";
			document.getElementById("nav").style.display="";
			document.getElementById("scaled-menu").style.display="none";
		}
		
	}
	export default {
		name: "Header",
		components:{
			Menu,
		}
	}
</script>

<style>
	.header-block{
		/* background-color: #2892b8; */
		background-color: #EF6C00;
		width: 100%;
		height: 10vw;
		line-height: 10vw;
	}
	.header-logo{
		width: 22.5vw;
		height: 7.5vw;
		margin-top: 1.25vw;
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
		font-size: 1.7vw;
		font-family: "microsoft yahei";
		font-weight: bold;
		color: white;
		margin-right: 4vw;
	}
	.header-members{
		display: inline;
		font-weight: bold;
		font-size: 1.7vw;
		color: white;
		margin-right: 4vw;
	}
	.header-join{
		display: inline;
		font-size: 1.7vw;
		font-weight: bold;
		padding: 1.5vw;
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
</style>
