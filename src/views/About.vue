<script setup></script>

<template>
   
    <div class="  bg-[url('../stars.jpeg')]
     h-screen bg-cover flex flex-col  grow  ">
        
    
        <div class="navbar">
           
  <div class="flex-1">
    <router-link to="/" >
    <a class="btn glass btn-circle btn-outline text-xl">
        <i class="fa-sharp fa-solid fa-earth-americas text-4xl "></i>
    </a>
</router-link>
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
    <div class="flex  justify-center">
        <div class="card lg:card-side bg-base-100 shadow-xl  h-96 w-2/3 ">
  <img src="https://media3.giphy.com/media/bXhiABcqQGT3W/giphy.gif?cid=ecf05e476z4s7gj2ttjy7umlv6pywrtpo99p9to2fh2yxwvx&rid=giphy.gif&ct=g" 
    alt="Planet" />
  <div class="card-body card-compact">
    <h2 class="card-title font-bold font-mono">Solar System</h2>
    <p>The Solar System is the gravitationally bound system of the Sun and the 
      objects that orbit it. It formed 4.6 billion years ago from the gravitational 
      collapse of a giant interstellar molecular cloud. </p>
    <div class="card-actions justify-end">
        <router-link to='/planet'>
            <button class="btn  glass font-semibold capitalize font-serif">Planets</button>
        </router-link>
     
    </div>
  </div>
</div>
    </div>

</div>
</template>