<script setup>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { usePlanetsStore } from "../stores/planets";
import BackHome from "../components/BackHome.vue";
import NavBar from "../components/NavBar.vue";
import LoadingError from "../components/LoadingError.vue";

const { planet, loading, error } = storeToRefs(usePlanetsStore());
const { fetchPlanet } = usePlanetsStore();
const route = useRoute(usePlanetsStore());

fetchPlanet(route.params.planet);
</script>

<template>
  <NavBar />
  <div
    class="flex flex-col items-center justify-center h-fit m-2"
    v-if="planet"
  >
    <router-link to="/planet">
      <BackHome class="absolute top-0 left-1/2" />
    </router-link>
    <LoadingError :loading="loading" :error="error" />
    <div>
      <img
        :src="
          planet.image
            ? planet.image
            : 'https://cdn3.vectorstock.com/i/1000x1000/91/47/error-404-astronaut-standing-on-the-planet-vector-23939147.jpg'
        "
        :alt="planet.name"
        class="w-96"
      />
    </div>
    <div
      class="ml-5 container flex flex-col items-center p-4 text-left h-80 bg-base-300"
    >
      <h2 class="text-2xl font-bold font-serif">
        {{ planet.name }}
      </h2>
      <p class="p-6 text-info-content">
        {{ planet.description }}
      </p>
    </div>
    <div
      class="ml-5 container flex flex-col items-center p-4 text-left h-80 bg-base-300"
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
