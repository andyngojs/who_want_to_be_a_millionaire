const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let bgMusic = new Audio("./assets/music/music-start.mp3");

let playBtn = $("#play-btn");
let startBtn = $(".btn-start");
let welcomeSection = $(".welcome__start");
let playSection = $(".play-container");
let modal = $(".modal");
let inputName = $(".txtName");
let questionElement = $("#question");
let answerBox = $(".answer__box");

let shuffledQuestions, currentQuestionIndex;

function startGame() {
  playHandler();
  userHandler();
}

function playHandler(nameUser) {
  playBtn.addEventListener("click", () => {
    //bgMusic.play();
    modal.classList.add("show");
  });

  startBtn.addEventListener("click", (e) => {
    if (nameUser) {
      welcomeSection.classList.add("hide");
      playSection.classList.remove("hide");
      modal.classList.remove("show");

      // Handle User Name
      setConfig("Name", nameUser);
      const namePlayer = JSON.parse(
        localStorage.getItem("GAME_MILLIONAIRE")
      ).Name;
      $(".name-user").innerHTML = namePlayer;

      // Handle show question
      shuffledQuestions = questions.sort(() => Math.random() - 0.15);
      currentQuestionIndex = 0;

      setNextQuestion();
    } else {
      e.preventDefault();
    }
  });
}

function showQuestion(questions) {
  // Show question
  questionElement.innerHTML = questions.question;
  showAnswer(questions);
}

function showAnswer(questions) {
  const htmls = questions.answers.map((item, index) => {
    return `<div class="btn" id="answer_1" data-correct=${index}>${item}</div>`;
  });
  answerBox.innerHTML = htmls.join("");
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function userHandler() {
  inputName.addEventListener("change", (e) => {
    const userName = e.target.value;
    if (userName) startBtn.classList.remove("btn-disable");
    playHandler(userName);
  });
}

startGame();
