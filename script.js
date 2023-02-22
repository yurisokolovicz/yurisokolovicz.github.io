"use strict";

document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
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
