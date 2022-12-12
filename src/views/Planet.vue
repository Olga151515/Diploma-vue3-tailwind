<script setup></script>

<template>
    <div class="bg-[url('../public/giphy.gif')] w-full h-screen bg-cover ">
<router-link to="/" >
  <div class="flex  gap-2 items-center ">
   
        <i class="fa-sharp fa-solid fa-earth-americas text-xl "></i>
       <div>Home</div> 
   
  </div>
</router-link>
      

<div class="text-center text-2xl ">
    Planets
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://www.farmersalmanac.com/wp-content/uploads/2010/08/Mercury-planet-as_102739845.jpeg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">Mercury</h2>
    <p class="text-lg">Mercury is the closest planet to the Sun in our Solar System. </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn more ...</button>
    </div>
  </div>
</div>
</div>
    </div>

</template>