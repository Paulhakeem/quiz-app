<script setup>
import { ref, onMounted } from "vue";
import ScoreMarks from "./scoreMarks.vue";

let scores = ref(0);
let answer = [];
let questionCounter = ref(0);
let endOfQuiz = ref(false);
const currentQuestion = ref({
  question: "",
  answer: 1,
  choices: [],
});

const question = [];
console.log(question);

const loadQuestions = () => {
  if (question.length > questionCounter.value) {
    currentQuestion.value = question[questionCounter.value];
    questionCounter.value++;
  } else {
    console.log("Thank you for participating");
    endOfQuiz.value = true;
  }
};

const correctAnswer = (element) => {
  if (element) {
    answer.push(element);
  }
};

const keyEvent = (choice, answers) => {
  setTimeout(() => {
    const chosenAnswer = answer;
    const choiceID = answers++;
    if (currentQuestion.value.answer == choiceID) {
      console.log("you right");
      scores.value = +10;
    } else {
      console.log("you are wrong");
    }

    loadQuestions();
  }, 1000);
};

const fetchQuestion = async () => {
  fetch("https://opentdb.com/api.php?amount=10&category=18")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const newQuestion = data?.results.map((serverQuiz) => {
        const arrangeQuiz = {
          question: serverQuiz?.question,
          choices: "",
          answer: "",
        };

        const choices = serverQuiz?.incorrect_answers;

        arrangeQuiz.answer = Math.floor(Math.random() * 4 + 1);

        choices.splice(arrangeQuiz.answer - 1, 0, serverQuiz?.correct_answer);

        arrangeQuiz.choices = choices;

        return arrangeQuiz;
      });
      question.value = newQuestion;
      // console.log(newQuestion)
      loadQuestions();
    });
    
};

onMounted(() => {
  fetchQuestion();
});
</script>

<template>
  <div
    id="body"
    class="max-w-md m-auto justify-center text-center rounded-md mb-4 mt-12 select-none"
  >
    <!-- percentege score -->
    <ScoreMarks v-if="endOfQuiz" />

    <div class="flex gap-8 justify-between">
      <h1
        class="header text-xl text-university font-semibold pt-4 text-left pl-4"
      >
        Welcome to our Quiz app
      </h1>
      <div
        class="circle bg-university w-16 h-16 rounded-full mt-2 cursor-pointer mr-3"
      >
        <div class="pt-2">
          <p class="quiz text-white font-semibold">Scores</p>
          <p class="quiz text-white font-semibold">{{ scores }}%</p>
        </div>
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
        <p class="font-bold text-gray-700">
          {{ questionCounter }}/ {{ question.length }}
        </p>
      </div>
    </main>

    <footer class="mb-4"></footer>
  </div>
</template>
