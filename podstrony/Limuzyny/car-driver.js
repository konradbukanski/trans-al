document.querySelector(".menu__prices").addEventListener("click", () => {
  document
    .querySelector(".ofert__description--prices")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document.querySelector(".menu__availability").addEventListener("click", () => {
  document
    .querySelector(".availability")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

document.querySelector(".menu__about").addEventListener("click", () => {
  document
    .querySelector(".about")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document.querySelector(".cars__choose--one").addEventListener("click", () => {
  document
    .querySelector(".audi")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document.querySelector(".cars__choose--two").addEventListener("click", () => {
  document
    .querySelector(".bmw")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

document.querySelector(".cars__choose--tree").addEventListener("click", () => {
  document
    .querySelector(".mercedes")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
