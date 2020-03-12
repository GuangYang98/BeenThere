<template>
	<div class="header-block" id="header-block">
		<img src="../assets/logo.png" class="header-logo" id="logo">
		<Menu id="scaled-menu" style="float:right; 
		margin-right: 4vw; display: none;"/>
		<div class="header-text-nav" id="nav" style="display: none;">
			<a class="header-home" href="/">主页</a>
			<a class="header-members" href="/join">Beenthere大家庭</a>
			<a class="header-join" href="/join">我要加入</a>
		</div>
	</div>
</template>

<script>
	import Menu from "./Menu.vue"
	console.log(window.location.href);
	if(window.location.href=="http://47.103.90.218/") {
		window.onscroll = function() {
			if(window.pageYOffset >= 140) {
				document.getElementById("home-header").style.backgroundColor="#EF6C00";
			}else{
				document.getElementById("home-header").style.backgroundColor="transparent";
			}
		}
	}
	document.onreadystatechange = function (){
		if(document.documentElement.clientWidth < 800) {
			document.getElementById("nav").style.display="none";
			document.getElementById("scaled-menu").style.display="";
		}else{
			document.getElementById("nav").style.display="";
			document.getElementById("scaled-menu").style.display="none";
		}
	}
	
	
	window.onresize = function () {
		// console.log("宽度：" + document.documentElement.clientWidth);
		if(document.documentElement.clientWidth < 800) {
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
		},
		
	}
</script>

<style>
	.header-block{
		/* background-color: #2892b8; */
		background-color: #EF6C00;
		width: 100%;
		height: 140px;
		line-height: 140px;
		font-family: "arial rounded mt bold";
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
</style>
