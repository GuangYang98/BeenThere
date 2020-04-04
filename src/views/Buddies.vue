<template>

    <div>
        <Header style="position: fixed; display: inline-block;
		z-index: 999999;" id="family-header"/>
        <BuddyContent/>
        <Footer style="margin-top: 2vw;"/>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'
    import BuddyContent from '../components/BuddyContent.vue'

    export default {
        name: 'buddies',
        components: {
            Footer,
            Header,
            BuddyContent
        },
        mounted: () => {
            document.onreadystatechange = function (){
                if(document.readyState == "complete") {
                    if(document.documentElement.clientWidth < 1000) {
                        document.getElementById("family-header").style.height="14vw";
                        document.getElementById("family-header").style.lineHeight="14vw";
                    }else{
                        document.getElementById("family-header").style.height="140px";
                        document.getElementById("family-header").style.lineHeight="140px";
                    }
                }
            }

            window.onresize = function () {
                if(document.documentElement.clientWidth < 1000) {

                    document.getElementById("family-header").style.height="14vw";
                    document.getElementById("family-header").style.lineHeight="14vw";
                    // document.getElementById("nav").style.marginTop="2vw";
                    // document.getElementById("home-wrapper").style.fontSize="4.3vw";
                }else{
                    // document.getElementById("home-wrapper").style.fontSize="1.5vw";
                    document.getElementById("family-header").style.height="140px";
                    document.getElementById("family-header").style.lineHeight="140px";
                    // document.getElementById("nav").style.marginTop="20px";
                }
            }
        }
    }

</script>

<style scoped>

</style>