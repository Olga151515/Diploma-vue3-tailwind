import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      transitionName: "slide-up",
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
    path: "/card/:planet",
    name: "Card",
    component: () => import("../views/Card.vue"),
    meta: {
      transitionName: "slide-down",
      order: 3,
    },
  },

  {
    path: "/asteroidBelt",
    name: "Asteroid Belt",
    component: () => import("../views/AsteroidBelt.vue"),
    meta: {
      transitionName: "slide-down",
      order: 4,
    },
  },

  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
    meta: {
      transitionName: "slide-down",
      order: 5,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
