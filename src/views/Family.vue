<template>
    <div>
        <Header style="position: fixed; display: inline-block;
		z-index: 999999;" id="home-header"/>
        <div style="height: 140px;"></div>
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

    }
</script>




<style>
    body{
        background-color: #FFB74D;
    }
</style>