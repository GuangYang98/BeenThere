import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Tawk from 'vue-tawk'

Vue.config.productionTip = false

Vue.use(Tawk, {
    tawkSrc: 'https://embed.tawk.to/5d0cf96336eab972111899f7/default'
});

new Vue({
  router,
  store,
  Tawk,
  vuetify,
  render: h => h(App)
}).$mount('#app')
