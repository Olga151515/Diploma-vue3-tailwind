<script setup>
import BackHome from '../components/BackHome.vue';
import NavBar from '../components/NavBar.vue';

</script>

<template>
   
    <div class="  bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80')] h-screen bg-contain flex flex-col  ">  
       
      <NavBar />
      <router-link  to="/" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
<transition name="slide-fade"> 
    <div class="flex  justify-center mt-10">
        <div class="card lg:card-side bg-base-100 shadow-xl  h-96 w-2/3 ">
  <img src="https://media3.giphy.com/media/bXhiABcqQGT3W/giphy.gif?cid=ecf05e476z4s7gj2ttjy7umlv6pywrtpo99p9to2fh2yxwvx&rid=giphy.gif&ct=g" 
    alt="Planet" />
  <div class="card-body card-compact bg-base-200">
    <h2 class="card-title font-bold font-mono text-info-content">Solar System</h2>
    <p >The Solar System is the gravitationally bound system of the Sun and the 
      objects that orbit it. It formed 4.6 billion years ago from the gravitational 
      collapse of a giant interstellar molecular cloud. </p>
    <div class="card-actions justify-end">
        <router-link to='/planet'>
            <button class="btn  glass font-semibold capitalize font-serif rounded-md">
              <i class="fa-sharp fa-solid fa-earth-americas pr-2 "></i>
              Planets</button>
        </router-link>
       
    </div>
  </div>
</div>
    </div>
  </transition>
 
</div>
</template>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>