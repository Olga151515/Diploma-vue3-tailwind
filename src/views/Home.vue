<script setup>
import { onMounted, ref } from "vue";

const showH1 = ref(false);

onMounted(() => {
  showH1.value = true;
});
</script>

<template>
  <div
    class="w-full h-fill bg-cover flex items-center bg-[url('../night.gif')] flex-col justify-between relative"
  >
    <div class="flex justify-between items-center gap-10">
      <transition name="bounce">
        <h1
          class="text-4xl font-semibold font-serif text-slate-400 italic"
          v-if="showH1"
        >
          Solar System
          <span class="material-icons text-4xl">rocket_launch</span>
        </h1>
      </transition>

      <img
        src="https://media0.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif?cid=ecf05e47acauar5na0s8f0h1ax61aiommhhjo73p814b13g7&rid=giphy.gif&ct=g"
        class="object-contain earth-mask"
        alt="Earth"
      />
    </div>
    <router-link to="/about">
      <span class="material-icons text-4xl btn glass btn-circle -translate-y-2">
        expand_more
      </span>
    </router-link>
  </div>
</template>

<style>
.bounce-enter-active,
.bounce-leave-active {
  transition: all 1s ease;
  transition-delay: 1s;
}
.bounce-enter-to,
.bounce-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.bounce-enter-from {
  opacity: 0;
  transform: translateX(-300px);
}
.bounce-leave-to {
  opacity: 0;
  transform: translateX(300px);
}

.earth-mask {
  mask-image: url(../assets/earth_mask.png);
}
</style>
