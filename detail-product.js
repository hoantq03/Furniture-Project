"use strict";

// toggle heart
const heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  heart.classList.toggle("fa-solid");
  heart.classList.toggle("fa-heart-circle-check");
});

// add and decrease
const decrease = document.querySelector(".qty-decrease");
const increase = document.querySelector(".qty-increase");
const number = document.querySelector(".quantity-selector");

decrease.addEventListener("click", () => {
  if (number.value <= 1) {
    return;
  } else {
    number.value = Number(number.value) - 1;
  }
});

increase.addEventListener("click", () => {
  number.value = Number(number.value) + 1;
});

// load image

const allImg = document.querySelectorAll(".small-img");
const mainImage = document.querySelector("#MainImg");

allImg.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.dataset.src;
  });
});
