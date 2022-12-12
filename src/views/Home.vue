<script setup></script>

<template >
    
<div class="bg-[url('../public/Earth1.gif')] w-full h-screen bg-cover flex items-center
flex-col justify-between">

    <div class="navbar">
  <div class="flex-1">
    <a class="btn btn-circle normal-case text-xl">
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
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>

    <router-link to="/about"  >
      <div class="text-6xl btn btn-circle">
        <i class="fas fa-arrow-circle-down text-4xl text-slate-500"></i>
    </div>
    </router-link>
</div>
</template>