<script setup>
import { storeToRefs } from "pinia";
import { usePlanetsStore } from "../stores/planets";
import PlanetCard from "../components/PlanetCard.vue";
import LoadingError from "../components/LoadingError.vue";

const { planets, loading, error } = storeToRefs(usePlanetsStore());
const { fetchPlanets } = usePlanetsStore();

fetchPlanets();
</script>

<template>
  <div>
    
    <LoadingError :loading="loading" :error="error" />

    <div class="w-full h-fit container lg:p-4 m-auto">
      <div class="planets" v-if="!loading && !error">
        <PlanetCard
          v-for="planet in planets"
          :key="planet.id"
          :planet="planet"
        />
      </div>
    </div>
  </div>
</template>
