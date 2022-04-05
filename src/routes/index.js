import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/movie/:id",
      component: () => import("@/views/Movie.vue"),
    },
    {
      path: "/moviedetail/:id",
      component: () => import("@/views/MovieDetail.vue"),
    },
    {
      path: "/sub",
      name: "sub",
      component: () => import("@/views/Sub.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
