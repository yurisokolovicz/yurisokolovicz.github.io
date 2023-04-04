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
  window.location.href = "https://yu-tindog.netlify.app/";
});

const tindogButtonDoc = document.getElementById("tindog-button-doc");
tindogButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/TinderDog";
});

const natoursButtonWeb = document.getElementById("natours-button-web");
natoursButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-natours.netlify.app/";
});

const natoursButtonDoc = document.getElementById("natours-button-doc");
natoursButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Natours";
});

const guessMyNumberButtonWeb = document.getElementById(
  "guess_my_number-button-web"
);
guessMyNumberButtonWeb.addEventListener("click", function () {
  window.location.href = "https://guess-my-number-yu.netlify.app";
});

const guessMyNumberButtonDoc = document.getElementById(
  "guess_my_number-button-doc"
);
guessMyNumberButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Guess-My-Number";
});

const piggametButtonWeb = document.getElementById("pig_game-button-web");
piggametButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-pig-game.netlify.app/";
});

const piggameButtonDoc = document.getElementById("pig_game-button-doc");
piggameButtonDoc.addEventListener("click", function () {
  window.location.href = "https://github.com/yurisokolovicz/Pig-Game";
});

const bankistButtonWeb = document.getElementById("bankist-button-web");
bankistButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-bankist.netlify.app/";
});

const bankistButtonDoc = document.getElementById("bankist-button-doc");
bankistButtonDoc.addEventListener("click", function () {
  window.location.href =
    "https://github.com/yurisokolovicz/BANKIST/commits/deploy";
});

const bankistInterfaceButtonWeb = document.getElementById(
  "bankist_interface-button-web"
);
bankistInterfaceButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-bankist-ui.netlify.app/";
});

const bankistInterfaceButtonDoc = document.getElementById(
  "bankist_interface-button-doc"
);
bankistInterfaceButtonDoc.addEventListener("click", function () {
  window.location.href =
    "https://github.com/yurisokolovicz/js-projects/tree/main/12-Numbers-Dates-Timers-Bankist/starter";
});

const yufoodButtonWeb = document.getElementById("yufood-button-web");
yufoodButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yufood.netlify.app/#5ed6604591c37cdc054bcc3e";
});

const expenseButtonWeb = document.getElementById("expense-button-web");
expenseButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-expenses.netlify.app/";
});

const yurestaurantButtonWeb = document.getElementById(
  "yurestaurant-button-web"
);
yurestaurantButtonWeb.addEventListener("click", function () {
  window.location.href = "https://yu-restaurant.netlify.app/";
});
