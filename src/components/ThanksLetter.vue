<template>
	<v-row data-app="true">
		<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
		<template v-slot:activator="{ on }">
			<v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
		</template>
			<v-card>
			<v-toolbar dark color="primary">
				<v-btn icon dark @click="dialog = false">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>Settings</v-toolbar-title>
					<v-spacer></v-spacer>
				<v-toolbar-items>
				<v-btn dark text @click="dialog = false">Save</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<div style="width: 40vw; margin-left: 30vw; height: 50vw; margin-top: 1vw;">
				<v-img src="../assets/letter.jpg">
					<div style="background-color: orange; width: 40vw; height: 30vw;">
						<div>
							<v-text-field placeholder="XXX" style="width: 10vw; display: inline-block; margin-left:3vw"></v-text-field>
							<p style="display: inline-block; margin-left: 2vw; font-size: 2vw;">Buddy</p>
						</div>
					</div>
				</v-img>
			</div>
			
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
	export default {
		name:"ThanksLetter",
		data () {
			return {
				dialog: false,
				notifications: false,
				sound: true,
				widgets: false,
			}
		},
	}
</script>

<style>
</style>
