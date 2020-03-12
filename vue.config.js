module.exports = {
	publicPath:'./',
	assetsDir: 'static',
	devServer: {
			open: false,
			disableHostCheck: true,
			host: "0.0.0.0",
			port: 80,
			https: false,
			hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
			proxy: null, // string | Object
			// before: app => {}
			headers: {
			'Access-Control-Allow-Origin':'*',
			},
	},
	
	
	"transpileDependencies": [
		"vuetify"
	]
}
