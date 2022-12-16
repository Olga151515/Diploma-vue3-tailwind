<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<template >
    
<div class=" w-full h-full bg-cover flex items-center  bg-[url('../night.gif')]
flex-col justify-between relative">

  <!-- <NavBar /> -->

<div class="flex justify-between items-center gap-14">

  <transition  name="bounce">
    <h1 class="text-4xl font-semibold font-serif ">Solar System  
      <span class="material-icons text-4xl ">rocket_launch</span>
    </h1>
</transition>
   

      <img src="https://media0.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif?cid=ecf05e47acauar5na0s8f0h1ax61aiommhhjo73p814b13g7&rid=giphy.gif&ct=g" 
      class="object-contain "
      alt="Earth">
</div>
    <router-link to="/about"  >
      <span class="material-icons text-4xl btn glass btn-circle">expand_more
      </span>
    </router-link>
</div>
</template>

<style>
.bounce-enter-active,
.bounce-leave-active {
  transition: all 1s ease;
}
.bounce-enter-to {
  position: absolute;
  right: 0;
}

.bounce-enter-from {
  position: absolute;
  left: -100% ;
}
.bounce-leave-to {
  position: absolute;
  right:  -100%;
}

.bounce-leave-from {
  position: absolute;
  left: 0 ;
}

</style>