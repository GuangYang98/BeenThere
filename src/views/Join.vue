<template>
	<div>
		<Header style="position: fixed; display: block; z-index: 999999; -webkit-transition: .5s ease-in-out;" id="normal-header"/>
		<JoinContent id="join-content"/>
		<!-- <ThanksLetter/> -->
		<Footer style="padding-top: 5vw;"/>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import JoinContent from "../components/JoinContent.vue";
// import ThanksLetter from "../components/ThanksLetter.vue"

export default {
  name: "Join",
  components: {
    Footer,
	Header,
	JoinContent,
	// ThanksLetter
  },
  mounted: () => {
		document.onreadystatechange = function (){
				if(document.readyState == "complete") {
					if(document.documentElement.clientWidth < 700) {
						document.getElementById("join-content").style.fontSize="3vw";
					}else{
						document.getElementById("join-content").style.fontSize="1.3vw";
					}
					if(document.documentElement.clientWidth < 1000) {
						document.getElementById("normal-header").style.height="14vw";
						document.getElementById("normal-header").style.lineHeight="14vw";
						document.getElementById("join-content").style.paddingTop="16vw";
					}else{
						document.getElementById("normal-header").style.height="140px";
						document.getElementById("normal-header").style.lineHeight="140px";
						document.getElementById("join-content").style.paddingTop="160px";
					}
				}
			}
		
		window.onresize = function () {
			if(document.documentElement.clientWidth < 1000) {
				document.getElementById("normal-header").style.height="14vw";
				document.getElementById("normal-header").style.lineHeight="14vw";
				document.getElementById("join-content").style.paddingTop="16vw";
			}else{

				document.getElementById("normal-header").style.height="140px";
				document.getElementById("normal-header").style.lineHeight="140px";
				document.getElementById("join-content").style.paddingTop="160px";
			}
		}
	}
  
}
</script>

<style>
	body{
		background-color: #FFFFFF;
	}
</style>