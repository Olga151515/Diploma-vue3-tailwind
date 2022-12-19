import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      transitionName: "slide-down",
      order: 0,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      transitionName: "slide-up",
      order: 1,
    },
  },
  {
    path: "/planet",
    name: "Planet",
    component: () => import("../views/Planet.vue"),
    meta: {
      transitionName: "slide-up",
      order: 2,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      transitionName: "slide-up",
      order: 3,
    },
  },
  {
    path: "/card",
    name: "Card",
    component: () => import("../views/Card.vue"),
    meta: {
      transitionName: "slide-up",
      order: 4,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
