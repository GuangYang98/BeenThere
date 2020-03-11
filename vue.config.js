module.exports = {
	devServer: {
	    open: false,
	    disableHostCheck: false,
	    host: "0.0.0.0",
	    port: 8088,
	    https: false,
	    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
	    proxy: null // string | Object
	    // before: app => {}
	  },
  "transpileDependencies": [
    "vuetify"
  ]
}