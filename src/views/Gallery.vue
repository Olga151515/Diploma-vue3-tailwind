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
const visibleRef = ref(false);
const onShow = () => {
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
gallery();
</script>

<template>
  <div class="flex items-center flex-col">
    <div class="flex items-center">
      <img
        class="w-20"
        src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
        alt="NASA"
      />
      <h1 class="text-3xl text-slate-100 indicator">
        Astronomy Picture of the day
        <span class="indicator-item badge badge-primary">{{
          picOfTheDay.date
        }}</span>
      </h1>
    </div>

    <div class=" flex-col  flex max-w-6xl m-8  gap-4 mt-8 md:flex-row">
      <div
        class=" m-auto cursor-pointer rounded-lg overflow-hidden ring-2 ring-gray-500 
        relative"
        @click="onShow"
      >
        <img
          class=" object-fill  "
          :src="picOfTheDay.url"
          :alt="picOfTheDay.title"
        />
        <span
          class="material-icons text-2xl btn btn-circle absolute bottom-2 right-2"
        >
          zoom_in
        </span>
      </div>
      <div class="shrink max-w-[75%] p-6">
        <h2 class="text-2xl font-black text-sky-600 mb-3">
          {{ picOfTheDay.title }}
        </h2>
        <p class="text-sm  lg:text-lg">{{ picOfTheDay.explanation }}</p>
      </div>
    </div>
    <vue-easy-lightbox
      :imgs="picOfTheDay.url"
      :visible="visibleRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>
