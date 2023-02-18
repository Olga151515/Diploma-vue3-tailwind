<script setup>
import { ref } from "vue";



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
  <div class="flex items-center flex-col m-auto container  ">
    <div class="flex items-center">
      <img class="w-24"
      src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" 
      alt="NASA">
      <h1 class="text-3xl text-slate-100 indicator ">
    Astronomy Picture of the day 
    <span class="indicator-item badge badge-primary ">{{ picOfTheDay.date }}</span> </h1>
    </div>
   
      <div class="flex items-center flex-col">
  <div class="card-body flex items-center  ">
    <h2 class="card-title text-center text-2xl font-black text-sky-600 ">
      {{ picOfTheDay.title }}
    </h2>
    <p>{{ picOfTheDay.explanation }}</p>
  </div>
  <img class=" h-3/4   object-contain "
    :src="picOfTheDay.url"
    :alt="picOfTheDay.title">
 
    </div>
    </div>
</template>
