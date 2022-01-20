import { beginMusic, loadedMusic, endMusic } from "./musicHandle.js";
import setConfig from "./util.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bgMusic = new Audio("./assets/music/music-start.mp3");
const startMusic = new Audio("./assets/music/music-wait.mp3");
const correctMusic = new Audio("./assets/music/music-correct.mp3");
const wrongMusic = new Audio("./assets/music/music-wrong.mp3");

let playBtn = $("#play-btn");
let startBtn = $(".btn-start");
let welcomeSection = $(".welcome__start");
let playSection = $(".play-container");
let modal = $(".modal");
let inputName = $(".txtName");
let questionElement = $("#question");
let answerBox = $(".answer__box");
let pinMoneys = $$(".pin-money__item");
let modalNoti = $(".modal-notification");
let secondNumber = $(".second-number");
let shuffledQuestions, currentQuestionIndex, correctCurrent;

function startGame() {
  beginMusic(bgMusic);
  playHandler();
  userHandler();
}

function playHandler(nameUser) {
  playBtn.addEventListener("click", () => {
    beginMusic(startMusic);
    modal.classList.add("show");
  });
  startBtn.addEventListener("click", (e) => {
    if (nameUser) {
      welcomeSection.classList.add("hide");
      playSection.classList.remove("hide");
      modal.classList.remove("show");
      // Handle User Name
      setConfig("Name", nameUser);
      const namePlayer = JSON.parse(localStorage.getItem("GAME_MILLIONAIRE")).Name;
      $(".name-user").innerHTML = namePlayer;
      // Handle show question
      shuffledQuestions = questions.sort(() => Math.random() - 0.15);
      currentQuestionIndex = 0;
      setNextQuestion();
    } else {
      e.preventDefault();
    }
  });

  $(".backBtn").addEventListener("click", () => {
    modalNoti.classList.remove("show");
    welcomeSection.classList.remove("hide");
    playSection.classList.add("hide");
  });
}
//    let secondCount = 30;
//    function timeCount() {
//      const timeInterval = setInterval(async () => {
//       await secondCount--;
//      console.log('[time count]:' + secondCount );
//      secondNumber.innerText = secondCount;
//    }, 1000);
//    timeInterval();
//  }
function showQuestion(questions) {
  questionElement.innerHTML = questions.question;
  showAnswer(questions);
}

function showAnswer(questions) {
  const htmls = questions.answers.map((item, index) => {
    return `<div class="btn" id="answer_1" data-correct=${index}>${item}</div>`;
  });
  answerBox.innerHTML = htmls.join("");
  correctCurrent = questions.correct;
}

function selectAnswer() {
  let answers = $$("#answer_1");
  answers.forEach((item) => {
    item.onclick = () => {
      let dataCorrect = item.getAttribute("data-correct");
      let isCorrect = false;
      if (dataCorrect == correctCurrent) {
        beginMusic(correctMusic);
        isCorrect = true;
        setStatus(item, isCorrect);
        setTimeout(() => {
          currentQuestionIndex++;
          setNextQuestion();
        }, 2000);
      } else {
        beginMusic(wrongMusic);
        setStatus(item, isCorrect);
        wrongAnswerHandler();
      }
    };
  });
}

function setNextQuestion() {
  endMusic(correctMusic);
  loadedMusic(correctMusic);
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  selectAnswer();
  jumpLevelHandler();
}

function jumpLevelHandler() {
  let moneyArr = [...pinMoneys];
  let newArrReverse = moneyArr.reverse();
  newArrReverse.forEach((item, index) => {
    if (index == currentQuestionIndex) {
      item.classList.add("active");
      let money = item.querySelectorAll(".money-label")[0].innerText;
      setConfig("Money", money);
    } else {
      item.classList.remove("active");
    }
  });
}

function wrongAnswerHandler() {
  let money = JSON.parse(localStorage.getItem("GAME_MILLIONAIRE")).Money;
  modalNoti.classList.add("show");
  $(".message").innerHTML = `Bạn thua cuộc! Bạn ra về với ${money}$`;
}

function userHandler() {
  inputName.addEventListener("change", (e) => {
    const userName = e.target.value;
    if (userName) startBtn.classList.remove("btn-disable");
    playHandler(userName);
  });
}

function setStatus(element, correct) {
  correct
    ? element.classList.add("blink-btn")
    : element.classList.add("wrong-btn");
}

startGame();
