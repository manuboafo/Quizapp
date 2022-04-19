const quizData = [
  {
    question: "Which tag creates a check box for a form in HTML?",
    a: "<checkbox>",
    b: `<input type="checkbox">`,
    c: "<input=checkbox>",
    d: "<input checkbox>",
    correct: "b",
  },
  {
    question: "The HTML document itself begins with",
    a: "<html>",
    b: "<body>",
    c: "<p>",
    d: "<!DOCTYPE>",
    correct: "a",
  },
  {
    question:
      "In HTML document the visible parts starts from the declaration of",
    a: "<!DOCTYPE html>",
    b: "<p>",
    c: "<html>",
    d: "<body>",
    correct: "d",
  },

  {
    question: "HTML comment begins with_____ symbol.",
    a: "<",
    b: ">",
    c: "<!",
    d: "!>",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     `; 
    }
  }
});
