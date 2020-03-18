<template>
	<div>
		<Header style="position: fixed; display: block; 
		z-index: 999999; 
		-webkit-transition: .5s ease-in-out;" id="normal-header"/>
		<JoinContent id="join-content"/>
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
					document.getElementById("join-content").style.fontSize="3vw";
					// document.getElementById("join-comment").style.fontSize="2.5vw";
				}else{
					document.getElementById("join-content").style.fontSize="1.3vw";
					// document.getElementById("join-comment").style.fontSize="1vw";
				}
				if(document.documentElement.clientWidth < 800) {
					document.getElementById("nav").style.fontSize="3vw";
					document.getElementById("logo").style.width="29.6vw";
					document.getElementById("logo").style.height="10vw";
					document.getElementById("normal-header").style.height="14vw";
					document.getElementById("normal-header").style.lineHeight="14vw";
					document.getElementById("join-content").style.paddingTop="14vw";
					document.getElementById("logo").style.marginTop="2vw";
					// document.getElementById("nav").style.marginTop="2vw";
					// document.getElementById("home-wrapper").style.fontSize="4.3vw";
				}else{
					// document.getElementById("home-wrapper").style.fontSize="1.5vw";
					document.getElementById("nav").style.fontSize="27px";
					document.getElementById("logo").style.width="296px";
					document.getElementById("logo").style.height="100px";
					document.getElementById("normal-header").style.height="140px";
					document.getElementById("normal-header").style.lineHeight="140px";
					document.getElementById("join-content").style.paddingTop="140px";
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
				document.getElementById("normal-header").style.height="14vw";
				document.getElementById("normal-header").style.lineHeight="14vw";
				document.getElementById("join-content").style.paddingTop="14vw";
				document.getElementById("logo").style.marginTop="2vw";
				// document.getElementById("nav").style.marginTop="2vw";
				// document.getElementById("home-wrapper").style.fontSize="4.3vw";
			}else{
				// document.getElementById("home-wrapper").style.fontSize="1.5vw";
				document.getElementById("nav").style.fontSize="27px";
				document.getElementById("logo").style.width="296px";
				document.getElementById("logo").style.height="100px";
				document.getElementById("normal-header").style.height="140px";
				document.getElementById("normal-header").style.lineHeight="140px";
				document.getElementById("join-content").style.paddingTop="140px";
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