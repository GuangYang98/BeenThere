<template>
  <div class="text-center" style="margin-right: 2vw;" data-app="true">
    <v-menu
		transition="slide-y-transition"
		open-on-hover
		bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
            x-large
            style="background-color: #FFB74D;"
              v-on="on" v-if="getWidth()>800"
            >
            <div style="color: white; font-weight: bold; font-size: 1.5vw;">加入我们</div>
            </v-btn>
			<v-btn
			small
			style="background-color: #FFB74D;;"
			v-on="on" v-else
			>
			<div style="color: white; font-weight: bold; font-size: 1.5vw;">加入我们</div>
				
			</v-btn>
          </template>
          <v-list style="background-color: dodgerblue; font-weight: 700;">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="jump(item.title)"
            >
              <v-list-item-title style="color: white; ">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  </div>
</template>

<script>
export default {
	name: "Menu",
	data: () => ({
		items: [
		{ title: '校园大使' },
		{ title: '实习生' },
		{ title: 'Online Buddy' },
	],
	}),
	methods:{
		jump: function(keyword){
			if(keyword == "校园大使")
				window.location.href="https://wj.qq.com/s2/5251276/c88e";
			else if(keyword == "Online Buddy")
				window.location.href="https://wj.qq.com/s2/5703103/1d0b/";
			else
				window.location.href="https://wj.qq.com/s2/5282581/c2cd/";
		},
		getWidth(){
			return document.documentElement.clientWidth;
		}
	}
}
</script>

<style>
</style>
