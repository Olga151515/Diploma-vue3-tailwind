<script setup>
defineProps(["planet"]);

</script>

<template>
    <div class="card  bg-base-200 shadow-xl w-auto rounded-lg  ">
  <img 
  :src="
  planet.image ? 
  planet.image : 
  'https://cdn3.vectorstock.com/i/1000x1000/91/47/error-404-astronaut-standing-on-the-planet-vector-23939147.jpg'
  "
  :alt="planet.name"
  class="h-56 object-contain"
  />
  <div class="card-body ">
    <h2 class="card-title text-center text-2xl">
      {{ planet.name }}
    </h2>
    <p class="text-sm text-left text-info-content ">
      {{ planet.shortDescription }}  
    </p>
    <div class="card-actions justify-end">
      <router-link :to="`/card/${planet.slug}`">
        <button class="btn glass capitalize rounded-md">
            <span class="material-icons mr-2 ">travel_explore</span>
            Learn more 
        </button>
      </router-link>
     
    </div>
  </div>
</div>


</template>