<template>
	<div>
		<Header style="position: fixed; display: inline-block; 
		z-index: 999999; background-color: transparent; 
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
  
}
</script>

<style>
	body{
		background-color: #FFB74D;
	}
</style>