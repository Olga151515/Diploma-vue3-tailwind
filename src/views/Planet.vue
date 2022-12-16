<script setup>
import BackHome from '../components/BackHome.vue';
import PlanetCard from '../components/PlanetCard.vue';

</script>

<template>
  <router-link to="/about" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
      
    <div class="bg-[url('../public/Space2.jpeg')] w-full h-full bg-cover ">
      <h1 class=" font-bold font-serif text-4xl mb-5 p-4 ">
        Planets:
      </h1>
    
      <PlanetCard />
    </div>

</template>