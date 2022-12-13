<script setup></script>

<template >
    
<div class=" w-full h-screen bg-cover flex items-center  bg-[url('../night.gif')]
flex-col justify-between">

    <div class="navbar">
  <div class="flex-1">
    <a class="btn glass btn-circle btn-info text-xl">
        <i class="fa-sharp fa-solid fa-earth-americas text-4xl "></i>
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
        <router-link to="/about"  >
            <li><a>About</a></li>
        </router-link>
        
      
      <li tabindex="0">
        <a>
          Planets
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <router-link to="/card">
            <li><a>Mercury</a></li>
          </router-link>
          <li><a>Vinus</a></li>
          <li><a>Earth</a></li>
          <li><a>Mars</a></li>
          <li><a>Jupiter</a></li>
          <li><a>Saturn</a></li>
          <li><a>Uranus</a></li>
          <li><a>Neptune</a></li>
        </ul>
      </li>
    
    <router-link to='/contact'>
      <li><a>Contact</a></li>
    </router-link>
    </ul>
  </div>
</div> 
<div class="flex justify-between items-center gap-14">

  <Transition name="slide-fade">
    <p class="text-4xl font-semibold font-serif ">Solar System</p>
</Transition>
   

      <img src="https://media0.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif?cid=ecf05e47acauar5na0s8f0h1ax61aiommhhjo73p814b13g7&rid=giphy.gif&ct=g" 
      class="object-contain "
      alt="Earth">
</div>
    <router-link to="/about"  >
      <div class="text-6xl btn glass btn-info btn-circle ">
        <i class="fas fa-arrow-circle-down text-4xl "></i>
    </div>
    </router-link>
</div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>