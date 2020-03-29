<template>
    <div class="buddy-content-wrapper">
        <div style="height: 545px; width: 100%; overflow: hidden; ">
            <v-img :src="pic" style="position: relative; top:-125%"></v-img>
        </div>
            <div class="post-date">
                <h4 >{{date}}</h4>
                <h1 style="vertical-align: center">{{title}}</h1>
            </div>

            <div class="sqs-row">
                <div id="page">
                    <div class="intro-cont" v-html="cont"></div>
                </div>
            </div>
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        name: "BuddyContent",
        data() {
            return {
                who: -1,
                cont:"",
                pic:"",
                date:"",
                title:"",
            }
        },
        methods: {
            getBuddy() {
                let _self = this;
                axios.get(`/beenthere.xml`).then(function(res) {
                    var xmlList = JSON.parse(JSON.stringify(_self.$x2js.xml2js(res.data)))
                    console.log(xmlList);
                    let t = xmlList.rss.channel.item;
                    for (var i = 0; i< 35; i+=2) {
                        // Obtain the name from the t[i].link
                        var letter = t[i].link.slice(9);
                        if (_self.$route.params.name === letter ){
                            _self.who = i; break;
                        }
                    }
                    if (_self.who !== -1) {
                        _self.cont = t[i].encoded[0]["__cdata"];
                        _self.pic = t[i+1].link;
                        _self.date=t[i+1].pubDate.slice(0,16);
                        _self.title=t[i].title;
                    } else {
                        //TODO: Nobody found in the list, then push to 404 page.
                        //_self.$router.push();
                    }
                })
                    .catch(function(err) {
                        console.log(err)
                        _self.loading = false;
                    });
            }
        },
        mounted() {
            document.documentElement.scrollTop = document.body.scrollTop  = 0;
            document.getElementById("home-header").style.backgroundColor="transparent";
            this.getBuddy()
        }
    }
</script>

<style>
    .buddy-content-wrapper{
        background-color: white;
    }
    .sqs-row{
        width: 50%;
        margin: 0 auto;
    }
    .post-date{
        font-family: Roboto;
        z-index: 5;
        position: absolute;
        top: 254px;
        font-weight: 500;
        font-size: 35px;
        letter-spacing: 2px;
        text-align: center;
        color: #fff;
        width: 100%;
        height: 545px;
        -webkit-transform: translatez(0);
        background-size: 100%;
    }
    .post-date h4 {
        vertical-align: center
    }
    .intro-cont h2 {
        font-family: Roboto;
        line-height: 1.4em;
        color: #47b8e1;
        font-style: normal;
        font-size: 60px;
        letter-spacing: 1px;
        text-transform: none;
    }
    .intro-cont h3 {
        font-family: Roboto;
        line-height: 1.4em;
        color: #fc6;
        font-style: normal;
        font-size: 60px;
        letter-spacing: 2px;
        text-transform: capitalize;
    }
    .intro-cont p {
        line-height: 1.6em;
        font-family: Roboto;
        font-weight: 900;
        font-style: normal;
        font-size: 18px;
        letter-spacing: 2px;
        color: #0a0a0a;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    .intro-cont img{
        width: 100%;
    }
    #page{
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: auto;
        margin: auto;
        max-width: 1020px;
        padding: 96px 32px;
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: subpixel-antialiased;
    }
</style>