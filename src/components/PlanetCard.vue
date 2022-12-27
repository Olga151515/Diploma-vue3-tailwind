<script setup>

defineProps(['planet']);

</script>

<template>
    <div class="card  bg-base-200 shadow-xl w-auto rounded-lg">
  <img src="https://www.farmersalmanac.com/wp-content/uploads/2010/08/Mercury-planet-as_102739845.jpeg" alt="Shoes" />
  <div class="card-body ">
    <h2 class="card-title text-center text-2xl">
      {{ planet.name }}
    </h2>
    <p class="text-sm text-left">Mercury is the closest planet to the Sun in our Solar System. </p>
    <div class="card-actions justify-end">
      <router-link to="/card">
        <button class="btn glass capitalize ">
            <span class="material-icons mr-2">travel_explore</span>
            Learn more </button>
      </router-link>
     
    </div>
  </div>
</div>


</template>