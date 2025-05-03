import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: () => import("../pages/home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
