const Carthago = document.querySelector(".ofert__choose--Carthago");
const Adria = document.querySelector(".ofert__choose--Adria");
const Dethleffs = document.querySelector(".ofert__choose--Dethleffs");
const Volkswagen = document.querySelector(".ofert__choose--Volkswagen");

Carthago.addEventListener("click", () => {
  console.log("siema");
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Carthag").classList.add("display");
});
Adria.addEventListener("click", () => {
  console.log("siema");
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Adria").classList.add("display");
});
Dethleffs.addEventListener("click", () => {
  console.log("siema");
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Dethleffs").classList.add("display");
});
Volkswagen.addEventListener("click", () => {
  console.log("siema");
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Caravelle").classList.add("display");
});
