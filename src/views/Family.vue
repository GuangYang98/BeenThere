<template>
    <div>
        <Header style="position: fixed; display: inline-block;
		z-index: 999999;" id="home-header"/>
        <FamilyContent/>
        <Footer style="margin-top: 2vw;"/>
    </div>
</template>

<script>

    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'
    import FamilyContent from '../components/FamilyContent.vue'

    export default {
        name: 'family',
        components: {
            Footer,
            Header,
            FamilyContent
        },
		mounted: () => {
			document.onreadystatechange = function (){
				if(document.readyState == "complete") {
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