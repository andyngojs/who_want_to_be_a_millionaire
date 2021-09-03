const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let bgMusic = new Audio("./assets/music/music-start.mp3");

let playBtn = $("#play-btn");
let startBtn = $(".btn-start");
let welcomeSection = $(".welcome__start");
let playSection = $(".play-container");
let modal = $(".modal");

function startGame() {
  userHandler();
}

function userHandler() {
  playBtn.addEventListener("click", () => {
    bgMusic.play();
    modal.classList.add("show");
  });

  startBtn.addEventListener("click", () => {
    welcomeSection.classList.add("hide");
    playSection.classList.remove("hide");

    modal.classList.remove("show");
  });
}

startGame();
