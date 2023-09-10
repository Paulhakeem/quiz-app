<script setup>
import { ref, onMounted } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

let answer = [];
let questionCounter = ref(0);
const currentQuestion = ref({
  question: "",
  answer: 1,
  choices: [],
});

const question = [
  {
    question: "What is your favourite programming language?",
    answer: 1,
    choices: ["Ruby", "java", "python"],
  },
  {
    question: "What is your favourite javascript framework?",
    answer: 1,
    choices: ["React", "Vue", "Angular"],
  },
  {
    question: "What is your favourite animal?",
    answer: 1,
    choices: ["Horse", "Dog", "Cat"],
  },
];

const quizStart = () => {
  currentQuestion.value = question[questionCounter.value];
};

const correctAnswer = (element) => {
  if (element) {
    answer.push(element);
  }
};

const keyEvent = (choice, answers) => {
  const chosenAnswer = answer;
  const choiceID = answers++;
  if (currentQuestion.value.answer == choiceID) {
    console.log("you right");
  } else {
    console.log("you are wrong");
  }
};

onMounted(() => {
  quizStart();
});
</script>

<template>
  <div
    id="body"
    class="max-w-md m-auto justify-center text-center border border-1 border-university rounded-md h-screen mb-7 mt-12 select-none"
  >
    <div class="flex gap-8 justify-between">
      <h1
        class="header text-xl text-university font-semibold pt-4 text-left pl-4"
      >
        Welcome to our Quiz app
      </h1>
      <div
        class="circle bg-university w-14 h-14 rounded-full mt-2 cursor-pointer mr-3"
      >
        <p class="quiz text-white pt-3 font-semibold">Scores</p>
      </div>
    </div>

    <!-- quiz container -->
    <main>
      <!-- question container -->
      <div class="shadow-md rounded-md mx-4 my-4">
        <div class="rounded-lg bg-gray-150 neumorph-1">
          <div class="p-3 text-start text-gray-700">
            {{ currentQuestion.question }}
          </div>
        </div>
      </div>

      <!-- answer container -->
      <div
        :ref="correctAnswer"
        @click="keyEvent(choice, answers)"
        v-for="(choice, answers) in currentQuestion.choices"
        :key="answers.id"
        class="mx-4 my-12 space-y-8"
      >
        <div
          class="neumorph-1 rounded-md border border-1 border-university p-2 hover:bg-university"
        >
          <div
            class="text-university text-start pl-2 flex divide-x-2 hover:text-white"
          >
            <div
              class="bg-university rounded-lg w-10 h-10 text-center text-white pt-2"
            >
              {{ answers }}
            </div>

            <p class="text-center px-4 pt-2 font-semibold hover:text-white">
              {{ choice }}
            </p>
          </div>
        </div>
      </div>

      <!-- progress -->

      <div class="mt-5 mb-5">
        <div class="h-1 w-12 bg-university rounded-full mx-auto"></div>
        <p class="font-bold text-gray-700">1/10</p>
      </div>
    </main>

    <footer class="mx-6 mb-4">
      <div class="justify-between flex ml-4 mr-4">
        <button class="uppercase bg-university p-5 w-36 text-white rounded-md">
          submit
        </button>
        <button class="uppercase bg-university p-5 w-36 text-white rounded-md">
          next
        </button>
      </div>
    </footer>
  </div>
</template>
