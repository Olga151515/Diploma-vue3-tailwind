<script setup>
import BackHome from '../components/BackHome.vue';
import NavBar from '../components/NavBar.vue';
import PlanetCard from '../components/PlanetCard.vue';

</script>

<template>
  <NavBar />
  <router-link to="/about" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
      
    <div class="bg-[url('../public/Space2.jpeg')] w-full h-fit  bg-cover 
    container lg:p-4">
      
    <div class="planets">
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
      <PlanetCard />
    </div>
      
    </div>

</template>