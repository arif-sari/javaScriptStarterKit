console.log("Merhaba Kodlama.io");

let dolarDun = 9.256;

let dolarBugun = 9.3;

console.log(dolarDun);
let euroDun = 12;
console.log(euroDun);

let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
  "Özel Konum Kredisi",
  "A kredisi",
];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
