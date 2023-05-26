//==================================
// Lazy load
// Lazy loading images

const imgTargets = document.querySelectorAll("img");
imgTargets.forEach((img) => img.classList.add("blur"));

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    // remove blur
    entry.target.classList.remove("blur");
    observer.unobserve(entry.target);
    console.log(entry);
  }
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.25,
});

imgTargets.forEach((img) => {
  imgObserver.observe(img);
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
////////
