<script setup>

</script>

<template>
  <div class="w-full  h-screen relative ">
   
<router-view v-slot="{Component, route}">
<transition name="slide">
  <component :is="Component" />
  </transition>
</router-view>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.slide-leave-to {
  position: absolute;
  bottom: -100%;
}

.slide-leave-from {
  position: absolute;
  bottom: 0 ;
}
.slide-enter-to {
  position: absolute;
  bottom:  0;
}

.slide-enter-from {
  position: absolute;
  bottom: -100% ;
}
</style>

