<template>
  <div class="text-center" style="margin-right: 20px;" data-app="true">
    <v-menu
          transition="slide-y-transition"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="purple"
              style="background-color: transparent;"
              v-on="on"
            >
				<v-icon xx-large color="purple darken-2">mdi-dialpad</v-icon>
            </v-btn>
          </template>
          <v-list style="background-color: dodgerblue; font-weight: 700;">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="jump(i)"
            >
              <v-list-item-title style="color: white;">{{ item.title }}</v-list-item-title>
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
		{ title: '主页' },
		{ title: 'Beenthere 大家庭' },
		{ title: '我要加入' },
	],
	}),
	methods:{
		jump: function(keyword){
			if(keyword == "我要加入")
				window.location.href="https://beentherebuddy.com/711943786725";
			else if(keyword == "主页")
				window.location.href="https://beentherebuddy.com/";
			else
				window.location.href="https://beentherebuddy.com/beenthere-2";
		}
	}
}
</script>

<style>
</style>
