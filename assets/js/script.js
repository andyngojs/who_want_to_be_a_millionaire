const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let bgMusic = new Audio("./assets/music/music-start.mp3");


let playBtn = $("#play-btn");
let startBtn = $(".btn-start");
let welcomeSection = $(".welcome__start");
let playSection = $(".play-container");
let modal = $(".modal");
let inputName = $(".txtName");
let questionElement = $("#question")
let answerButtonsElement = $(".btn-answer")

let shuffledQuestions, currentQuestionIndex


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
    if (nameUser.length > 0) {
      welcomeSection.classList.add("hide");
      playSection.classList.remove("hide");
      modal.classList.remove("show");

      shuffledQuestions = questions.sort(() => Math.random() -.15)
      currentQuestionIndex = 0
      
      setNextQuestion()
     

      setConfig("Name", nameUser);
      const namePlayer = JSON.parse(
        localStorage.getItem("GAME_MILLIONAIRE")
      ).Name;
      $(".name-user").innerHTML = namePlayer;
    } else {
      e.preventDefault();
    }
  });
}

function showQuestion(question){ //Hiển thị câu hỏi 
  questionElement.innerText = question.question
  
} 

function selectAnswer(e){
  
}

function setNextQuestion(){
  
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function userHandler() {
  inputName.addEventListener("change", (e) => {
    const userName = e.target.value;
    if (userName.length > 0) startBtn.classList.remove("btn-disable");
    playHandler(userName);
  });
}



startGame();


