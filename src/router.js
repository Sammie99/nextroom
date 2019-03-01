import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Viewrooms from "./views/viewrooms.vue";
import Settings from "./views/settings.vue";
import Periods from "./views/period.vue";
import Viewcalendar from "./views/viewcalendar.vue"
import Roomtime from "./views/roomtime.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "app",
      component: Home
    },
    {
      path: "/viewcalendar",
      name: "Viewcalendar",
      component: Viewcalendar,
      children:[
        {
          path: "/settings",
          name: "Settings",
          component: Settings
        },
      ]
    },
    {
      path: "/periods",
      name: "Periods",
      component: Periods
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/setting",
      name: "Setting",
      component: Settings
    },
    {
      path: "/viewrooms",
      name: "newhome",
      component: Viewrooms
    },
    {
    path: "/roomtime",
    name: "Roomtime",
    component: Roomtime
  }
  ]
});
