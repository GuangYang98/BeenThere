<template>
    <div class="family-content-wrapper">

        <div class="page-content">
            <div style="margin-top: 10%; " >
                <v-img src="../assets/home/car.png" width="27vw" style="display: inline-block;" eager></v-img>
                <div class="family-title">
                    <strong>BeenThere Online <br>Buddy们</strong>
                    <p><br>我们来自各地，有着不同的经历<br><br>
                        将我们连结在一起的，是那句<br><br>
                        经历过，所以懂</p>
                </div>
            </div>
        </div>
        <v-col :offset-md="2" :md="8" :offset-xs="1" :xs="10">
        <div class="middle" style="margin-top: 0vw;">
            <v-img src="../assets/family/2.png" style="display: inline-block; width:100%; margin:0 auto"   eager></v-img></div>
        <div class="middle" style="height: 45vw">
            <iframe width="100%" height="100%" src="//player.bilibili.com/player.html?aid=98269056&cid=167750424&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
			
        </div>

        <div class="middle" style="margin-top: -5%">
            <v-img src="../assets/family/1.png" style="display: inline-block; width:100%" eager ></v-img>
        </div>

        <div class="middle">
            <v-container style="height: 30vw">
                <v-col cols="4"  style="float: left;">
                    <v-row no-gutters><v-img src="../assets/family/IMG_9858.jpg" style="display: inline-block; height: 30vw" eager></v-img></v-row>
                </v-col>
                <v-col cols="4"  style="float: left;">
                    <v-row no-gutters style="margin-bottom: 1vw"><v-img src="../assets/family/IMG_9859.jpg" style="display: inline-block; height: 14.5vw" eager></v-img></v-row>
                    <v-row no-gutters><v-img src="../assets/family/IMG_9865.jpg" style="display: inline-block; height: 14.5vw" eager></v-img></v-row>
                </v-col>
                <v-col cols="4"  style="float: left;">
                    <v-row no-gutters><v-img src="../assets/family/IMG_9866.jpg" style="display: inline-block; height: 30vw;" eager></v-img></v-row>
                </v-col>
            </v-container>
            <v-container style="height: 15vw">
                <v-col cols="4" style="float: left;"><v-img src="../assets/family/IMG_9860.jpg" style="display: inline-block; height: 15vw" eager></v-img></v-col>
                <v-col cols="4" style="float: left;"><v-img src="../assets/family/IMG_9863.jpg" style="display: inline-block; height: 15vw" eager></v-img></v-col>
                <v-col cols="4" style="float: left;"><v-img src="../assets/family/IMG_9861.jpg" style="display: inline-block; height: 15vw" eager></v-img></v-col>
            </v-container>
        </div>
        <br>

        <div class="middle">
            <h2>我们的志愿者们</h2>
            <v-container>
                <v-row v-for="n in (result.length/3)" :key="n" no-gutters>
                    <v-col cols="4" v-for="i in result.slice(n*3-3, n*3-3+((result.length-n*3+3 >= 3)?3:result.length-n*3+3))" :key="i.id">
                        <div class="picture">
                            <p><v-img :src="i.picLink" style="display: inline-block;" eager></v-img></p>

                            <div style="text-align: center;">
                                <p class="buddyTitle"><b>{{i.title}}</b></p>
                            </div>
                                <div style="text-align: center" v-html="i.intro"></div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <br>
            <div class="add">
                <b>点我—><a href="/join" style="color: #f9b862;">加入BeenThere</a></b>
            </div>
        </div>
        </v-col>
    </div>


</template>

<script>
    import axios from 'axios';
    export default {
        name: "FamilyContent",
        data() {
            return {
                result:[],
            }
        },
        methods: {
            getBuddy() {
                let _self = this;
                axios.get('beenthere.xml').then(function(res) {
                    var xmlList = JSON.parse(JSON.stringify(_self.$x2js.xml2js(res.data)))
                    // console.log(xmlList);
                     _self.result = [];
                    let t = xmlList.rss.channel.item;
                    for (var i = 0; i< 41; i+=2) {
                        var item = new Map;
                        item['title'] = t[i].title;
                        item['url'] = t[i].link
                        // item['encoded'] = t[i].encoded[0]['__cdata'];
                        item['intro'] = t[i].encoded[1]['__cdata'];
                        item['picLink'] = require('../assets/family/'+t[i+1].link);
                        _self.result.push(item)
                        // console.log(_self.result)
                    }
                    // console.log(_self.result);
                })
                    .catch(function(err) {
                        console.log(err)
                        _self.loading = false;
                    });
            }
        },
        mounted() {
            this.getBuddy()

        }
    }

</script>

<style scoped>
    .family-content-wrapper{
        background-color: white;
        position: relative;
        padding-top: 3vw;
    }

    .page-content{
        text-align: center;
        font-family: Roboto;
        max-width: 75vw;
        margin: 0 auto;
        padding: 5% 0;
    }
    .family-title{
        text-align: left;
        display: inline-block;
        font-family: Roboto;
        margin-left: 5vw;
    }
    .family-title strong{
        font-size: 2.6vw;
        font-weight: bolder;
    }
    .family-title p{
        font-size: 1.5vw;
        font-weight: bold;
    }

    .picture{
        font-family: Roboto;
        max-width: 100%;
        float: left;
        margin-bottom: 5vw;
        margin-right: 50%;
        font-size: 1vw;
        clear:left;
        overflow: hidden;
    }
    .buddyTitle{
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 1.5vw;
        text-transform: uppercase;
        line-height: 1.2em;
    }
    .middle{
        max-width: 100%;
        margin: 5vw auto;

    }
    .middle h2 {
        font-family: Roboto;
        color: #47b8e1;
        font-style: normal;
        font-size: 3vw;
        text-transform: none;
        text-align: center;
    }
    .add{
        text-align: center;
        font-size: 1.5vw;
        font-weight: bold;
        font-family: Roboto;
        height: 10vw;
        vertical-align: middle;
    }
</style>