<template>
	<div>
		<Header style="float: left; background-color: transparent; 
		-webkit-transition: .5s ease-in-out;" id="home-header"/>
		<HomeContent/>
		<Footer style="margin-top: 2vw;"/>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import HomeContent from '../components/HomeContent.vue'

// window.onscroll = function() {
// 	if(window.pageYOffset >= 140) {
// 		document.getElementById("home-header").style.backgroundColor="#EF6C00";
// 	}else{
// 		document.getElementById("home-header").style.backgroundColor="transparent";
// 	}
// }
export default {
  name: 'Home',
  components: {
    Footer,
	Header,
	HomeContent
  },
  mounted: () => {
		document.onreadystatechange = function (){
			if(document.readyState == "complete") {
				if(document.documentElement.clientWidth < 800) {
					document.getElementById("nav").style.display="none";
					document.getElementById("scaled-menu").style.display="";
					// document.getElementById("home-wrapper").style.fontSize="4.3vw";
				}else{
					// document.getElementById("home-wrapper").style.fontSize="1.5vw";
					document.getElementById("nav").style.display="";
					document.getElementById("scaled-menu").style.display="none";
				}
			}
		}

		window.onresize = function () {
			if(document.documentElement.clientWidth < 800) {
				// document.getElementById("home-wrapper").style.fontSize="4.3vw";
				document.getElementById("nav").style.display="none";
				document.getElementById("scaled-menu").style.display="";
			}else{
				// document.getElementById("home-wrapper").style.fontSize="1.5vw";
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