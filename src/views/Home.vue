<template>
	<div>
		<Header style="position: fixed; display: inline-block; 
		z-index: 999999; background-color: transparent; 
		-webkit-transition: .5s ease-in-out; line-height: 140px; height: 140px;" id="home-header"/>
		<HomeContent id="home-headers"/>
		<Footer style="margin-top: 2vw;"/>
	</div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import HomeContent from "../components/HomeContent.vue";

export default {
  name: "Home",
  components: {
    Footer,
	Header,
	HomeContent
  },
  mounted: () => {
		window.onscroll = function() {
			if(window.pageYOffset >= 140) {
				document.getElementById("home-header").style.backgroundColor="#2892b8";
			}else{
				document.getElementById("home-header").style.backgroundColor="transparent";
			}
		}
		document.onreadystatechange = function (){
			if(document.readyState == "complete") {
				if(document.documentElement.clientWidth < 800) {
					document.getElementById("home-header").style.height="14vw";
					document.getElementById("home-header").style.lineHeight="14vw";
				}else{
					document.getElementById("home-header").style.height="140px";
					document.getElementById("home-header").style.lineHeight="140px";
				}
			}
		}

		window.onresize = function () {
			if(document.documentElement.clientWidth < 800) {
				document.getElementById("home-header").style.height="14vw";
				document.getElementById("home-header").style.lineHeight="14vw";
			}else{
				document.getElementById("home-header").style.height="140px";
				document.getElementById("home-header").style.lineHeight="140px";
				// document.getElementById("logo").style.marginTop="20px";
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