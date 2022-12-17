import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      transitionName: "slide-right",
      order: 0,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      transitionName: "slide-right",
      order: 1,
    },
  },
  {
    path: "/planet",
    name: "Planet",
    component: () => import("../views/Planet.vue"),
    meta: {
      transitionName: "slide-left",
      order: 2,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      transitionName: "slide-left",
      order: 3,
    },
  },
  {
    path: "/card",
    name: "Card",
    component: () => import("../views/Card.vue"),
    meta: {
      transitionName: "slide-left",
      order: 4,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
