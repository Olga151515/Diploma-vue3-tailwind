<script setup></script>

<template >
    
<div class=" w-full h-screen bg-cover flex items-center  bg-[url('../public/night.gif')]
flex-col justify-between">

    <div class="navbar">
  <div class="flex-1">
    <a class="btn glass btn-circle btn-outline text-xl">
        <i class="fa-sharp fa-solid fa-earth-americas text-4xl "></i>
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
        <router-link to="/about"  >
            <li><a>About</a></li>
        </router-link>
        <router-link to='/planet'>
      <li><a>Planet</a></li>
    </router-link>
    <router-link to='/contact'>
      <li><a>Contact</a></li>
    </router-link>
    </ul>
  </div>
</div> 
<div class="flex justify-between items-center gap-14">
  
    <p class="text-4xl text- ">Solar System</p>

      <img src="https://media0.giphy.com/media/l5JbspfwZ0yjHjlJ0K/giphy.gif?cid=ecf05e47acauar5na0s8f0h1ax61aiommhhjo73p814b13g7&rid=giphy.gif&ct=g" 
      class="object-contain "
      alt="Earth">
</div>
    <router-link to="/about"  >
      <div class="text-6xl btn glass btn-outline btn-circle ">
        <i class="fas fa-arrow-circle-down text-4xl "></i>
    </div>
    </router-link>
</div>
</template>

