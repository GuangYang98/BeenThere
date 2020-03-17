<template>
    <div class="family-content-wrapper">
        <div class="page-content">
            <div style="margin-bottom: 400px">
                <v-img src="../assets/home/car.png" style="display: inline-block; width: 500px; float: left" eager></v-img>
                <div class="family-title">
                    <strong>BeenThere Online <br>Buddy们</strong>
                    <p><br>我们来自各地，有着不同的经历<br><br>
                        将我们连结在一起的，是那句<br><br>
                        经历过，所以懂</p>
                </div>
            </div>
        </div>
        <div class="middle">
            <v-img src="../assets/family/2.png" style="display: inline-block; width:1020px; margin: 0 auto"   eager></v-img></div>
        <div class="middle">
            <iframe width="1020px" height="573px" src="https://www.youtube.com/embed/2leb172vXYo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; " allowfullscreen></iframe>
        </div>

        <div class="middle" style="margin-top: -50px">
            <v-img src="../assets/family/1.png" style="display: inline-block; width:1020px" eager ></v-img>
        </div>

        <div class="middle">
            <v-container style="height: 507px">
                <v-col cols="4"  style="float: left; padding: 20px">
                    <v-row no-gutters><v-img src="../assets/family/IMG_9858.jpg" style="display: inline-block; height: 507px" eager></v-img></v-row>
                </v-col>
                <v-col cols="4"  style="float: left; padding: 20px">
                    <v-row style="margin-bottom: 25px"><v-img src="../assets/family/IMG_9859.jpg" style="display: inline-block; height: 240px" eager></v-img></v-row>
                    <v-row ><v-img src="../assets/family/IMG_9865.jpg" style="display: inline-block; height: 240px" eager></v-img></v-row>
                </v-col>
                <v-col cols="4"  style="float: left; padding: 20px">
                    <v-row no-gutters><v-img src="../assets/family/IMG_9866.jpg" style="display: inline-block; height: 507px;" eager></v-img></v-row>
                </v-col>
            </v-container>
            <v-container style="height: 238px">
                <v-col cols="12" md="4" style="float: left;"><v-img src="../assets/family/IMG_9860.jpg" style="display: inline-block; height: 238px" eager></v-img></v-col>
                <v-col cols="12" md="4" style="float: left;"><v-img src="../assets/family/IMG_9863.jpg" style="display: inline-block; height: 238px" eager></v-img></v-col>
                <v-col cols="12" md="4" style="float: left;"><v-img src="../assets/family/IMG_9861.jpg" style="display: inline-block; height: 238px" eager></v-img></v-col>
            </v-container>
        </div>
        <br>

        <div class="middle">
            <h2>点击头像查看我们的故事</h2>
            <v-container>
                <v-row v-for="n in (result.length/3)" :key="n" no-gutters>
                    <v-col cols="4" v-for="i in result.slice(n*3-3, n*3-3+((result.length-n*3+3 >= 3)?3:result.length-n*3+3))" :key="i.id">
                        <div class="picture">
                            <a :href="i.url"><v-img :src="i.picLink" style="display: inline-block;" eager></v-img></a>

                        <div style="text-align: center;">
                            <a :href="i.url" class="buddyTitle"><b>{{i.title}}</b></a>
                        </div>
                        <div id="introduction">
                            <div style="text-align: center" v-html="i.intro"></div>
                        </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>

            <br>
            <div class="add">
                <b>点我—><a href="/join" style="color: #f9b862;">加入BeenThere</a></b>
            </div>
        </div>
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
                axios.get(`/beenthere.xml`).then(function(res) {
                    var xmlList = JSON.parse(JSON.stringify(_self.$x2js.xml2js(res.data)))
                    console.log(xmlList);
                     _self.result = [];
                    let t = xmlList.rss.channel.item;
                    for (var i = 0; i< 41; i+=2) {
                        var item = new Map;
                        item['title'] = t[i].title;
                        item['url'] = t[i].link
                        item['encoded'] = t[i].encoded[0]['__cdata'];
                        item['intro'] = t[i].encoded[1]['__cdata'];
                        item['picLink'] = t[i+1].link;
                        _self.result.push(item)
                    }
                    console.log(_self.result);
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
    }

    .page-content{
        font-family: Roboto;
        position: relative;
        top:140px;
        width: 1020px;
        margin: 0 auto;
        padding: 96px 32px;
    }
    .family-title{
        font-family: Roboto;
        float: right;
        padding: 50px 0;
    }
    .family-title strong{
        font-size: 53px;
        font-weight: bolder;
    }
    .family-title p{
        font-size: 19px;
        font-weight: bold;
    }

    .picture{
        font-family: Roboto;
        width: 340px;
        margin-bottom: 51px;
        margin-right: 51px;
        clear:left;
        overflow: hidden;
    }
    .buddyTitle{
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 1.44px;
        text-transform: uppercase;
        line-height: 1.2em;
    }
    .middle{
        width: 1020px;
        margin: 80px auto;

    }
    .middle h2 {
        font-family: Roboto;
        line-height: 1.4em;
        color: #47b8e1;
        font-style: normal;
        font-size: 60px;
        letter-spacing: 1px;
        text-transform: none;
        text-align: center;
    }
    .add{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        font-family: Roboto;
        height: 100px;
        vertical-align: middle;
    }
</style>