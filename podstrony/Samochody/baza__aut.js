const cars = [
  {
    brand: "Skoda",
    model: "Citigo",
    type: "mini",
    rok: 2019,
    miejca: 4,
    wiek: 23,
    bagaz: 1,
    cena1: 59,
    cena2: 54,
    cena3: 49,
    cena4: 39,
    limit: 200,
    kilometr: 0.25,
    bezlimitu: 75,
    kaucja: 500
  },
  {
    brand: "Skoda",
    model: "Fabia Combi",
    type: "Compact",
    rok: 2019,
    miejca: 5,
    wiek: 23,
    bagaz: 4,
    cena1: 79,
    cena2: 74,
    cena3: 69,
    cena4: 59,
    limit: 200,
    kilometr: 0.25,
    bezlimitu: 75,
    kaucja: 700
  },
  {
    brand: "Skoda",
    model: "Karoq",
    type: "SUV",
    rok: 2019,
    miejca: 5,
    wiek: 23,
    bagaz: 3,
    cena1: 129,
    cena2: 119,
    cena3: 109,
    cena4: 99,
    limit: 200,
    kilometr: 0.5,
    bezlimitu: 150,
    kaucja: 1500
  },
  {
    brand: "vw",
    model: "Caddy",
    type: "minivan",
    rok: 2019,
    miejca: 7,
    wiek: 27,
    bagaz: 3,
    cena1: 159,
    cena2: 149,
    cena3: 139,
    cena4: 129,
    limit: 200,
    kilometr: 0.35,
    bezlimitu: 100,
    kaucja: 1500
  },
  {
    brand: "Audi",
    model: "A6",
    type: "premium",
    rok: 2018 / 19,
    miejca: 5,
    wiek: 27,
    bagaz: 4,
    cena1: 319,
    cena2: 279,
    cena3: 249,
    cena4: 229,
    limit: 200,
    kilometr: 0.7,
    bezlimitu: 200,
    kaucja: 3000
  },
  {
    brand: "VW",
    model: "Caravelle",
    type: "BUS",
    rok: 2018 / 19,
    miejca: 8,
    wiek: 27,
    bagaz: 8,
    cena1: 279,
    cena2: 259,
    cena3: 239,
    cena4: 219,
    limit: 200,
    kilometr: 0.35,
    bezlimitu: 100,
    kaucja: 2000
  },
  {
    brand: "VW",
    model: "Crafter",
    type: "Furgon",
    rok: 2019,
    miejca: 3,
    wiek: 25,
    bagaz: 1000,
    cena1: 219,
    cena2: 209,
    cena3: 199,
    cena4: 189,
    limit: 200,
    kilometr: 0.35,
    bezlimitu: 100,
    kaucja: 2000
  },
  {
    brand: "BMW",
    model: "750 L",
    type: "Luxury",
    rok: 2019,
    miejca: 4,
    wiek: "-",
    bagaz: 4,
    cena1: 999,
    cena2: 899,
    cena3: 799,
    cena4: 699,
    limit: 200,
    kilometr: 1.5,
    bezlimitu: "-",
    kaucja: "-"
  }
];

// for (i = 0; i < cars.length; i++) {
//   const ofert = document.createElement("span");
//   const img = document.createElement("img");
//   img.setAttribute(`src`, `../../img/samochody/${cars[i].model}.png`);
//   const node = document.createTextNode(cars[i].brand + " " + cars[i].model);
//   ofert.appendChild(node);

//   document.querySelector(".ofert__choose--items").appendChild(ofert);
//   ofert.appendChild(img);
// }

for (i = 0; i < cars.length; i++) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.innerHTML = cars[i].brand + " " + cars[i].model;
  td2.innerHTML = cars[i].cena1;
  td3.innerHTML = cars[i].cena2;
  td4.innerHTML = cars[i].cena3;
  td5.innerHTML = cars[i].cena4;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  document.querySelector(".ofert__description--table").appendChild(tr);
}

const ofert = document.createElement("div");
ofert.className = "ofert";
ofert.innerHTML = cars[1].brand;
document.querySelector(".ofert__active").appendChild(ofert);
