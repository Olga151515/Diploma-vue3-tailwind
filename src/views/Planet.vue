<script setup>
import { storeToRefs } from "pinia";
import { usePlanetsStore } from "../stores/planets";
import BackHome from "../components/BackHome.vue";
import NavBar from "../components/NavBar.vue";
import PlanetCard from "../components/PlanetCard.vue";
import LoadingError from "../components/LoadingError.vue";

const { planets, loading, error } = storeToRefs(usePlanetsStore());
const { fetchPlanets } = usePlanetsStore();

fetchPlanets();
</script>

<template>
  <div>
    <router-link to="/about">
      <BackHome class="absolute top-0 left-1/2" />
    </router-link>

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
