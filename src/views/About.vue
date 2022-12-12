<script setup></script>

<template>
   
    <div class="  bg-[url('../public/Planet.gif')]
     h-screen bg-cover flex flex-col justify-between  ">
        
    
        <div class="navbar">
           
  <div class="flex-1">
    <router-link to="/" >
    <a class="btn btn-circle normal-case text-xl">
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
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>
    <div class="flex  justify-center">
        <div class="card lg:card-side bg-base-100 shadow-xl w-1/2  ">
  <figure><img src="https://media1.giphy.com/media/3og0IFrHkIglEOg8Ba/giphy.gif?cid=ecf05e477bmoi9ymmuhei4st43osb12va5cczy4ob9m2ppta&rid=giphy.gif&ct=g" alt="Jet"/></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="card-actions justify-end">
        <router-link to='/planet'>
            <button class="btn btn-primary">Planets</button>
        </router-link>
     
    </div>
  </div>
</div>
    </div>

</div>
</template>