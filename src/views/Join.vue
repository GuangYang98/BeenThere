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
  
}
</script>

<style>
	body{
		background-color: #FFB74D;
	}
</style>