<template>
  <div class="text-center" style="margin-right: 20px;">
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue"
          v-on="on"
        >
		<v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="jump"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
		{ title: 'Join' },
		{ title: 'Beenthere 大家庭' },
		{ title: 'Click Me' },
		{ title: 'Click Me 2' },
	],
	}),
	methods:{
		jump: function(keyword){
			if(keyword == "join")
				window.location.href="https://beentherebuddy.com/711943786725";
			else if(keyword == "home")
				window.location.href="https://beentherebuddy.com/";
			else
				window.location.href="https://beentherebuddy.com//beenthere-2";
		}
	}
}
</script>

<style>
</style>
