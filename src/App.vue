<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div  class="bg-orange-400 m-0 p-3">
    <h1 class="text-white text-xl font-bold">Hakeem <span class="text-black">quiz</span></h1>
  </div >
   <div id="body" class="max-w-md m-auto justify-center text-center border border-1 border-orange-400 rounded-md h-96 mt-12"></div>
  <RouterView />
</template>