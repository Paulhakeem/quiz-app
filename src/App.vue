<script setup>
import { RouterView } from 'vue-router'
import Home from './components/Home.vue';
</script>

<template>
  <div  class="bg-university m-0 p-3">
    <h1 class="text-white text-xl font-bold">Hakeem <span class="text-black">quiz</span></h1>
  </div >
   <Home/>
  <RouterView />
</template>