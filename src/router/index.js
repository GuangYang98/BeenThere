import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue"
// import App from "../App.vue"
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title:"Home - BeenThere"
		}
	},
	{
		path: "/join",
		name: "Join",
		component: () => import( "../views/Join.vue"),
		meta: {
			title:"Join US - BeenThere"
		}
	},
	{
		path: "/family",
		name: "family",
		component: () => import("../views/Family.vue"),
		meta: {
			title:"Beenthere 大家庭 - BeenThere"
		}
	},
	{
		path: '/buddies/:name',
		name: 'buddies',
		component: () => import('../views/Buddies.vue')
	},
	
	{
		path: "/policy",
		name: "policy",
		component: () => import("../views/Policy.vue"),
		meta: {
			title:"Beenthere服务使用协议与隐私政策 - BeenThere"
		}
	},
	{
		path: "/psyresource",
		name: "psyresource",
		component: () => import("../views/PsyResource.vue"),
		meta: {
			title:"心理热线 - BeenThere"
		}
	}
	
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
