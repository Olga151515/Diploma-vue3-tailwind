<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { usePlanetsStore } from "../stores/planets";
import LoadingError from "../components/LoadingError.vue";

const { planet, loading, error } = storeToRefs(usePlanetsStore());
const { fetchPlanet } = usePlanetsStore();
const route = useRoute(usePlanetsStore());

fetchPlanet(route.params.planet);
</script>

<template>
  <div
    class="flex flex-col items-center  "
    v-if="planet"
  >
   
    <LoadingError :loading="loading" :error="error" />
    <div class="">
      <img
        :src="
          planet.image
            ? planet.image
            : 'https://cdn3.vectorstock.com/i/1000x1000/91/47/error-404-astronaut-standing-on-the-planet-vector-23939147.jpg'
        "
        :alt="planet.name"
        class="w-80"
      />
    </div>
    <div
      class="ml-5 container flex flex-col items-center w-auto p-4 text-left h-auto"
    >
      <h2 class="text-2xl font-bold font-serif">
        {{ planet.name }}
      </h2>
      <p class="p-6 text-info-content">
        {{ planet.description }}
      </p>
    </div>
    <div
      class="ml-5 container flex flex-col items-center p-4 w-auto text-left h-auto"
    >
      <h3 class="text-2xl font-bold font-serif">
        Facts about {{ planet.name }}
      </h3>
      <p class="p-6 text-info-content">
        {{ planet.facts }}
      </p>
    </div>
  </div>
</template>
