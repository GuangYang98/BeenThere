import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Tawk from 'vue-tawk'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import x2js from 'x2js'

Vue.prototype.$x2js = new x2js()
Vue.config.productionTip = false


Vue.use(Tawk, {
    tawkSrc: 'https://embed.tawk.to/5d0cf96336eab972111899f7/default'
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  Tawk,
  vuetify,
  render: h => h(App)
}).$mount('#app')
