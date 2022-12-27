<script setup>
import {storeToRefs} from 'pinia'
import {usePlanetsStore } from "../stores/planets"
import BackHome from '../components/BackHome.vue';
import NavBar from '../components/NavBar.vue';
import PlanetCard from '../components/PlanetCard.vue';

const {planets, loading, error} = storeToRefs(usePlanetsStore)
const {fetchPlanets} = usePlanetsStore()

fetchPlanets()

</script>

<template>
  <div>
  <NavBar />
  <router-link to="/about" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
      
    <div class=" w-full h-fit container lg:p-4">
    <div class="planets">
      <PlanetCard v-for="planet in planets"
      :key="planet.id"
      :planet="planet"
      />
    </div>
  </div>
    </div>

</template>