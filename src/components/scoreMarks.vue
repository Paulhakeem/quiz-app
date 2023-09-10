<script setup></script>

<template>
  <div
    class="w-screen h-screen absolute z-30 bg-black bg-opacity-50 flex justify-center items-center right-0 top-0"
  >
    <div class="bg-university p-4 text-center h-44">
      <p class="font-bold text-white text-2xl">Well done</p>
      <p class="my-4 font-bold text-3xl">100% score</p>

      <div class="flex gap-4">
        <button
          class="rounded-full p-2 w-28 font-semibold border-2 text-white cursor-pointer hover:bg-white hover:text-university"
        >
          Done
        </button>
        <button
          class="rounded-full p-2 w-28 border-2 text-white cursor-pointer font-semibold hover:bg-white hover:text-university"
        >
          Retry
        </button>
      </div>
    </div>
  </div>
</template>
