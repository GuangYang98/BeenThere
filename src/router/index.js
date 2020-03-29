import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
// import About from "../views/About.vue"
// import App from "../App.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
	meta: {
		title:"Home - Beenthere"
	}
  },
  {
    path: "/join",
    name: "Join",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Join.vue"),
	meta: {
		title:"Join US - Beenthere"
	}
  },
  {
		path: "/family",
		name: "family",
		component: () => import("../views/Family.vue"),
		meta: {
		title:"Beenthere 大家庭 - Beenthere"
	}
  },
  {
      path: "/buddies/:name",
      name: "buddies",
      component: () => import("../views/Buddies.vue")
  },
 //  {
	// path: "/joinus",
	// name: "JoinUs",
	// component: () => import("../views/Join.vue")
 //  }
	
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
