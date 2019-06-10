const Carthago = document.querySelector(".ofert__choose--Carthago");
const Adria = document.querySelector(".ofert__choose--Adria");
const Dethleffs = document.querySelector(".ofert__choose--Dethleffs");
const Volkswagen = document.querySelector(".ofert__choose--Volkswagen");

Carthago.addEventListener("click", () => {
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Carthag").classList.add("display");
  Carthago.classList.add(".border");
});
Adria.addEventListener("click", () => {
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Adria").classList.add("display");
  Adria.classList.add(".border");
});
Dethleffs.addEventListener("click", () => {
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Dethleffs").classList.add("display");
  Carthago.classList.add(".border");
});
Volkswagen.addEventListener("click", () => {
  document
    .querySelectorAll(".ofert")
    .forEach(item => item.classList.remove("display"));
  document.querySelector(".Caravelle").classList.add("display");
  Volkswagen.classList.add(".border");
});

document.addEventListener("scroll", () => {
  if (document.scrollTop > 50) {
    console.log("asdsad");
    document.querySelector(".menu").className.add("hide");
  }
});
