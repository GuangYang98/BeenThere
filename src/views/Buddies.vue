<template>
    <div>
        <Header style="position: fixed; display: inline-block;
		z-index: 999999;" id="home-header"/>
        <BuddyContent/>
        <Footer style="margin-top: 2vw;"/>
    </div>
</template>

<script>
    import Footer from "../components/Footer.vue";
    import Header from "../components/Header.vue";
    import BuddyContent from "../components/BuddyContent.vue";

    export default {
        name: "buddies",
        components: {
            Footer,
            Header,
            BuddyContent
        },

    }

</script>

<style scoped>

</style>