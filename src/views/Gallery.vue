<script setup>
import NavBar from "../components/NavBar.vue";
import { storeToRefs } from "pinia";
import { useGalleryStore } from "../stores/gallery";

import LoadingError from "../components/LoadingError.vue";
import { ref } from "vue";

const { loading, error } = storeToRefs(useGalleryStore());
const { fetchGallery } = useGalleryStore();

fetchGallery();

const picOfTheDay = ref("");

const gallery = () => {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=u7E91GskeQ8fTMr45ajOyebI6IrDY9IyGoMGrV6i"
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        error = data.message;
        console.error(error);
      } else {
        picOfTheDay.value = data;
      }
    });
};

gallery();
</script>

<template>
  <div v-if="!loading && !error">
    <div
      class="carousel h-screen"
      v-for="galleries in gallery"
      :key="galleries.id"
      :gallery="galleries"
    >
      <div id="item1" class="carousel-item w-screen object-fit">
        {{ galleries.url }}
        {{ galleries.explanation }}
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          class="w-full"
        />
      </div>
      <div id="item2" class="carousel-item w-screen">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          class="w-full"
        />
      </div>
      <div id="item3" class="carousel-item w-screen">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          class="w-full"
        />
      </div>
      <div id="item4" class="carousel-item w-screen">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          class="w-full"
        />
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div>
  </div>
</template>
