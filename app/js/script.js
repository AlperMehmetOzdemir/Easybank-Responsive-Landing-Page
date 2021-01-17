console.log("Design by Frontend Mentor. Coded by Alper Mehmet Özdemir");

const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close hamburger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((el) => el.classList.remove("fade-in"));
    fadeElems.forEach((el) => el.classList.add("fade-out"));
  } else {
    // open hamburger menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((el) => el.classList.remove("fade-out"));
    fadeElems.forEach((el) => el.classList.add("fade-in"));
  }
});

overlay.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    //close hamburger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((el) => el.classList.remove("fade-in"));
    fadeElems.forEach((el) => el.classList.add("fade-out"));
  } else {
    // open hamburger menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((el) => el.classList.remove("fade-out"));
    fadeElems.forEach((el) => el.classList.add("fade-in"));
  }
});
