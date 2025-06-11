const openBtn = document.getElementById("openBtn");
const revealBtn = document.getElementById("revealBtn");
const cardFront = document.querySelector(".card-front");
const cardInside = document.querySelector(".card-inside");
const surprise = document.getElementById("surprise");

openBtn.addEventListener("click", () => {
  cardFront.classList.add("hidden");
  cardInside.classList.remove("hidden");
});

revealBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
});