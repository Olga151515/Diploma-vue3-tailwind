<script setup>
defineProps(['loading', 'error'])
</script>

<template>
    
    <div class="p-4 text-center" v-if="loading">Loading planets...</div>
     <div class="p-4 text-center bg-red-400" v-if="error">
      {{  error.message }}
    </div>
</template>