const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Atom", "Cell", "Tissue", "Organ"],
    correct: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correct: 0,
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C#", "HTML", "Java"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Select elements
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const retryBtn = document.getElementById("retry-btn");

// Display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionButtons.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.onclick = () => handleAnswer(index);
  });
}

// Handle answer selection
function handleAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Show results
function showResults() {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = score;
  resultMessage.textContent =
    score === 5
      ? "Excellent! Perfect Score!"
      : score >= 3
      ? "Great job!"
      : "Better luck next time!";
}

// Retry the quiz
retryBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  displayQuestion();
});

// Initialize the quiz
displayQuestion();
