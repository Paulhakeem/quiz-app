<script setup>
import { ref, onMounted} from 'vue';
import { Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption, } from '@headlessui/vue'


const question = ref([]);
const newQuestion = ref('')

onMounted(()=> {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
       question.value = data.results
      })
})



</script>

<template>
  <div id="body" class="max-w-md m-auto justify-center text-center
   border border-1 border-university rounded-md h-screen mt-12 select-none">

   <div class="flex gap-8 justify-between">
    <h1 class="header text-xl text-university font-semibold pt-4 text-left pl-4">Welcome to our Quiz app</h1>
    <div class="circle bg-university w-14 h-14 rounded-full mt-2 cursor-pointer mr-3">
      <p class="quiz text-white pt-3 font-semibold">Scores</p>
    </div>
   </div>
  

    <div class="w-72 pl-4 pt-5">
    <Listbox>
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-black py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate text-white">Choose your category</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <img src="../assets/down.png" alt="">
          </span>
        </ListboxButton>
      
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute text-left mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="quiz in question" 
              :key="question.id"
              :value="quiz"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-university text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span 
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ quiz.category }} </span
                >
                
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                <img src="../assets/check.svg" alt="">
                </span>
              </li>
              
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox> 
    
  </div>

  <footer class="pt-6">
    <div class="justify-between flex ml-4 mr-4">
      <button class="uppercase bg-university p-5 w-36 text-white rounded-md">submit</button>
      <button class="uppercase bg-university p-5 w-36 text-white rounded-md">next</button>
    </div>
  </footer>
   </div>
</template>
