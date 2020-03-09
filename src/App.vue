<template>
	<div>
		<Header/>
		<Footer/>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'



export default {
  name: 'App',

  components: {
    // HelloWorld,
	Footer,
	Header
  },

  data: () => ({
    //
  }),
};
</script>
