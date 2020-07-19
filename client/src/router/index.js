import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});

const routes = [
  {
    path: "/",
    name: "Top",
    component: () => import("../views/TopHeadlines.vue")
  },
  {
    path: "/saved",
    name: "Saved",
    component: () => import("../views/SavedHeadlines.vue")
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
