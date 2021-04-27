import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event-create",
    name: "EventCreate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventCreate.vue"),
  },
  {
    path: "/event-show/:id",
    name: "EventShow",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EventShow.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
