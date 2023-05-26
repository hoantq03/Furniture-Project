"use strict";

const nav = document.querySelector(".navbar");
const section = document.querySelector("#Section1");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(section);

//==================================
// Lazy load
// Lazy loading images

const imgTargets = document.querySelectorAll("img[data-src]");

console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.25,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

/////////////////////////////////////////
// Reveal sections

const section2 = document.querySelector("#Section2");
const section3 = document.querySelector("#Section3");
const footer = document.querySelector("#footer");

const allSections = [section2, section3, footer];

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  entry.target.classList.add("section-appear");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

////////////////////////////////////////////
// toggle open account

const btnOpen = document.querySelector(".btn--account");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".Popup-account");

console.log(overlay, btnOpen, popup);

btnOpen.addEventListener("click", () => {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");

  popup.classList.add("hidden");
  console.log(popup.classList);

  console.log("popup is closed");
});
