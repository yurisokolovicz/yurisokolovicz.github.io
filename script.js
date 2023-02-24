"use strict";

document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const gitHubButtonWeb = document.getElementById("gitHub-button-web");
gitHubButtonWeb.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz";
});

const tindogButtonWeb = document.getElementById("tindog-button-web");
tindogButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//TinDog/";
});

const tindogButtonDoc = document.getElementById("tindog-button-doc");
tindogButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/TinderDog";
});

const natoursButtonWeb = document.getElementById("natours-button-web");
natoursButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//Natours/";
});

const natoursButtonDoc = document.getElementById("natours-button-doc");
natoursButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Natours";
});

const guessMyNumberButtonWeb = document.getElementById(
  "guess_my_number-button-web"
);
guessMyNumberButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//GuessMyNumber/";
});

const guessMyNumberButtonDoc = document.getElementById(
  "guess_my_number-button-doc"
);
guessMyNumberButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Guess-My-Number";
});

const piggametButtonWeb = document.getElementById("pig_game-button-web");
piggametButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//PigGame/";
});

const piggameButtonDoc = document.getElementById("pig_game-button-doc");
piggameButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Pig-Game";
});

const bankistButtonWeb = document.getElementById("bankist-button-web");
bankistButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//bankist/";
});

const bankistButtonDoc = document.getElementById("bankist-button-doc");
bankistButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/BANKIST";
});

const bankistInterfaceButtonWeb = document.getElementById(
  "bankist_interface-button-web"
);
bankistInterfaceButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yurisokolovicz.github.io//BankistUI/";
});

const bankistInterfaceButtonDoc = document.getElementById(
  "bankist_interface-button-doc"
);
bankistInterfaceButtonDoc.addEventListener("click", function () {
  window.location.href =
    "https://github.com/yurisokolovicz/js-projects/tree/main/12-Numbers-Dates-Timers-Bankist/starter";
});
