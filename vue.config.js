module.exports = {
  "publicPath": "/",
  "assetsDir": "static",
  "devServer": {
    "open": false,
    "disableHostCheck": true,
    "host": "0.0.0.0",
    "port": 80,
    "https": false,
    "hotOnly": false,
    "proxy": null,
    "headers": {
      "Access-Control-Allow-Origin": "*"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}