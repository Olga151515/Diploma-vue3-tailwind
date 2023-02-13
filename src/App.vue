<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import NavBar from "./components/NavBar.vue";

const router = useRouter();

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

</script>

<template>
  <div class="w-full h-screen relative overflow-x-hidden flex flex-col">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName">
        <component class="grow" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
