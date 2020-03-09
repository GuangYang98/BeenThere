<template>
	<div class="header-block">
		<img src="../assets/logo.png" class="header-logo">
		<Menu id="scaled-menu" style="float:right; 
		margin-right: 20px;"/>
		<div class="header-text-nav" id="nav">
			<div class="header-home">主页 </div>
			<div class="header-members">Beenthere大家庭 </div>
			<div class="header-join">我要加入</div>
		</div>
	</div>
</template>

<script>
	import Menu from "./Menu.vue"
	
	window.onload = function () {
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
		}
	}
</script>

<style>
	.header-block{
		/* background-color: #2892b8; */
		background-color: #EF6C00;
		width: 100%;
		height: 140px;
		line-height: 140px;
		padding: 5px;
	}
	.header-logo{
		width: 296px;
		height: 100px;
		margin-top: 20px;
		margin-left: 20px;
		float: left;
		/* background-color: red; */
	}
	.header-text-nav{
		float:right; 
		margin-right: 20px;
		-webkit-transition-property:display;
		-webkit-transition-duration:1s;
		-webkit-transition-timing-function: ease;
	}
	.header-home{
		display: inline;
		font-size: 24px;
		font-weight: bold;
		color: white;
		margin-right: 40px;
	}
	.header-members{
		display: inline;
		font-weight: bold;
		font-size: 24px;
		color: white;
		margin-right: 40px;
	}
	.header-join{
		display: inline;
		font-size: 24px;
		font-weight: bold;
		padding: 10px;
		-webkit-transition-property:background-color, color;
		-webkit-transition-duration:0.5s;
		-webkit-transition-timing-function: ease;
		color: #ffce8f;
		-webkit-font-smoothing: antialiased;
		border: 2px solid #ffce8f;
		border-radius: 50px;
	}
	.header-join:hover{
		background-color: #ffce8f;
		color: black;
	}
</style>
