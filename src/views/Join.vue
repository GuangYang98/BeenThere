<template>
	<div>
		<Header style="position: fixed; display: block; 
		z-index: 999999; 
		-webkit-transition: .5s ease-in-out;" id="normal-header"/>
		<JoinContent/>
		<Footer style="margin-top: 2vw;"/>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import JoinContent from '../components/JoinContent.vue'

export default {
  name: 'Join',
  components: {
    Footer,
	Header,
	JoinContent
  },
  mounted: () => {
	document.onreadystatechange = function (){
		if(document.readyState == "complete") {
			if(document.documentElement.clientWidth < 700) {
				document.getElementById("join-content-block").style.fontSize="3vw";
				document.getElementById("join-comment").style.fontSize="2.5vw";
			}else{
				document.getElementById("join-content-block").style.fontSize="1.3vw";
				document.getElementById("join-comment").style.fontSize="1vw";
			}
			if(document.documentElement.clientWidth < 800) {
				document.getElementById("nav").style.display="none";
				document.getElementById("scaled-menu").style.display="";
			}else{
				document.getElementById("nav").style.display="";
				document.getElementById("scaled-menu").style.display="none";
			}
		}
	}
	
	window.onresize = function () {
		if(document.documentElement.clientWidth < 800) {
			document.getElementById("nav").style.display="none";
			document.getElementById("scaled-menu").style.display="";
		}else{
			document.getElementById("nav").style.display="";
			document.getElementById("scaled-menu").style.display="none";
		}
	}
  }
  
}
</script>

<style>
	body{
		background-color: #FFB74D;
	}
</style>