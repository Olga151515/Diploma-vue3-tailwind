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
  <div class="w-full min-h-screen relative overflow-hidden">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transitionName" >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
