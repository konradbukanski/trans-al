const Carthago = document.querySelector(".ofert__choose--Carthago");
const Adria = document.querySelector(".ofert__choose--Adria");
const Dethleffs = document.querySelector(".ofert__choose--Dethleffs");
const Volkswagen = document.querySelector(".ofert__choose--Volkswagen");
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
document.querySelector(".menu__prices_mob").addEventListener("click", () => {
  document
    .querySelector(".ofert__description--prices")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
document
  .querySelector(".menu__availability_mob")
  .addEventListener("click", () => {
    document.querySelector(".availability").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  });

document.querySelector(".menu__about_mob").addEventListener("click", () => {
  document
    .querySelector(".about")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".mobile__naw").classList.add("mobile__naw--active");
});
document.querySelector(".fa-window-close").addEventListener("click", () => {
  document
    .querySelector(".mobile__naw")
    .classList.remove("mobile__naw--active");
});
document.querySelectorAll(".mob").forEach(item => {
  item.addEventListener("click", () => {
    document
      .querySelector(".mobile__naw")
      .classList.remove("mobile__naw--active");
  });
});
