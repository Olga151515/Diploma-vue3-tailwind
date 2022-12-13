<script setup></script>

<template>
   
    <div class="  bg-[url('../stars.jpeg')]
     h-screen bg-cover flex flex-col  grow  ">
        
    
        <div class="navbar">
           
  <div class="flex-1">
    <router-link to="/" >
    <a class="btn glass btn-circle btn-info text-xl">
        <i class="fa-sharp fa-solid fa-earth-americas text-4xl "></i>
    </a>
</router-link>
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