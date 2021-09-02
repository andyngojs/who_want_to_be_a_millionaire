const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let playBtn = $("#play-btn");

const app = {
  handleEvent: () => {
    playBtn.addEventListener("click", () => {
      $(".modal").classList.add("show");
    });
  },
  start: function () {
    this.handleEvent();
  },
};

app.start();
