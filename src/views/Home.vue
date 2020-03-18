<template>
	<div>
		<Header style="position: absolute; display: inline-block; 
		z-index: 999999; background-color: transparent; 
		-webkit-transition: .5s ease-in-out; line-height: 140px; height: 140px;" id="home-header"/>
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
// 		document.getElementById("home-header").style.visibility="none";
// 	}else{
// 		document.getElementById("home-header").style.visibility="true";
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
					document.getElementById("nav").style.fontSize="3vw";
					document.getElementById("logo").style.width="29.6vw";
					document.getElementById("logo").style.height="10vw";
					document.getElementById("home-header").style.height="14vw";
					document.getElementById("home-header").style.lineHeight="14vw";
					document.getElementById("logo").style.marginTop="2vw";
					// document.getElementById("nav").style.marginTop="2vw";
					// document.getElementById("home-wrapper").style.fontSize="4.3vw";
				}else{
					// document.getElementById("home-wrapper").style.fontSize="1.5vw";
					document.getElementById("nav").style.fontSize="27px";
					document.getElementById("logo").style.width="296px";
					document.getElementById("logo").style.height="100px";
					document.getElementById("home-header").style.height="140px";
					document.getElementById("home-header").style.lineHeight="140px";
					document.getElementById("logo").style.marginTop="20px";
					// document.getElementById("nav").style.marginTop="20px";
				}
			}
		}

		window.onresize = function () {
			if(document.documentElement.clientWidth < 800) {
				document.getElementById("nav").style.fontSize="3vw";
				document.getElementById("logo").style.width="29.6vw";
				document.getElementById("logo").style.height="10vw";
				document.getElementById("home-header").style.height="14vw";
				document.getElementById("home-header").style.lineHeight="14vw";
				document.getElementById("logo").style.marginTop="2vw";
				// document.getElementById("nav").style.marginTop="2vw";
				// document.getElementById("home-wrapper").style.fontSize="4.3vw";
			}else{
				// document.getElementById("home-wrapper").style.fontSize="1.5vw";
				document.getElementById("nav").style.fontSize="27px";
				document.getElementById("logo").style.width="296px";
				document.getElementById("logo").style.height="100px";
				document.getElementById("home-header").style.height="140px";
				document.getElementById("home-header").style.lineHeight="140px";
				document.getElementById("logo").style.marginTop="20px";
				// document.getElementById("nav").style.marginTop="20px";
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