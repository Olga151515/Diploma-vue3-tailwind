<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

const transitionName = ref("");
</script>

<template>
  <div class="w-full h-screen relative">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName" mode="default">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
