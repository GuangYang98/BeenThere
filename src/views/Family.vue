<template>
    <div>
        <Header style="position: fixed; display: inline-block;
		z-index: 999999;" id="family-header"/>
        <FamilyContent style="padding-top: 5vw;"/>
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
							document.getElementById("nav").style.fontSize="3vw";
							document.getElementById("logo").style.width="29.6vw";
							document.getElementById("logo").style.height="10vw";
							document.getElementById("family-header").style.height="14vw";
							document.getElementById("family-header").style.lineHeight="14vw";
							document.getElementById("logo").style.marginTop="2vw";
							// document.getElementById("nav").style.marginTop="2vw";
							// document.getElementById("home-wrapper").style.fontSize="4.3vw";
						}else{
							// document.getElementById("home-wrapper").style.fontSize="1.5vw";
							document.getElementById("nav").style.fontSize="27px";
							document.getElementById("logo").style.width="296px";
							document.getElementById("logo").style.height="100px";
							document.getElementById("family-header").style.height="140px";
							document.getElementById("family-header").style.lineHeight="140px";
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
						document.getElementById("family-header").style.height="14vw";
						document.getElementById("family-header").style.lineHeight="14vw";
						document.getElementById("logo").style.marginTop="2vw";
						// document.getElementById("nav").style.marginTop="2vw";
						// document.getElementById("home-wrapper").style.fontSize="4.3vw";
					}else{
						// document.getElementById("home-wrapper").style.fontSize="1.5vw";
						document.getElementById("nav").style.fontSize="27px";
						document.getElementById("logo").style.width="296px";
						document.getElementById("logo").style.height="100px";
						document.getElementById("family-header").style.height="140px";
						document.getElementById("family-header").style.lineHeight="140px";
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