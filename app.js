const vazifa1 = +prompt("Raqam kiriting");
if (vazifa1 % 2 == 0) {
  console.log(`${vazifa1} soni juft son va jumla rost`);
} else {
  console.log(`${vazifa1} soni toq son va jumla yolg'on`);
}

//2-masala
const vazifa2 = +prompt("A sonini kiriting");
const vazifa2a = +prompt("B sonini kiriting ");
if (vazifa2 && vazifa2a % 2 == 0) {
  console.log(`${vazifa2} va ${vazifa2a} sonlari juft sonlar`);
} else {
  console.log(
    `${vazifa2} va ${vazifa2a} sonlari toq sonlar faqat bittasi toq bolishi mumkin tekshirib koring`
  );
}

// 3-masala
let R = Number(prompt("Doiraning radiusini kiriting:"));

if (R > 0) {
  let L = 2 * Math.PI * R;
  let S = Math.PI * Math.pow(R, 2);

  console.log(`Doiraning uzunligi: ${L.toFixed(2)}`);
  console.log(`Doiraning yuzi: ${S.toFixed(2)}`);
} else {
  console.log("Radius musbat son bo'lishi kerak!");
}

// 4-masala
let a = Number(prompt("a sonini kiriting:"));
let b = Number(prompt("b sonini kiriting:"));

if (a >= 0 && b >= 0) {
  let G = Math.sqrt(a * b);
  console.log(`Sonlarning o'rta geometrigi: ${G.toFixed(2)}`);
} else {
  console.log("Sonlar manfiy bo'lmasligi kerak!");
}

// 5- masala
let x = Number(prompt("x ning qiymatini kiriting:"));
let y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
console.log(`y funksiyaning qiymati: ${y}`);

// 6- masala
let price = 12000;
let number6 = +prompt(
  `nechchi kg konfet olmoqchisiz 1 kg konfet narxi:${price} so'm`
);
if (0 < price) {
  console.log(
    `siz${number6} kg konfet olmoqchisiz va uning narxi:${
      number6 * price
    } so'm bo'ladi`
  );
}

// 7-masala
let number7A = +prompt("A sonini kiriting");
let number7B = +prompt("B sonini kiriting");
console.log(`siz kiritgan qiymat: ${number7A}${number7B}`);
console.log(`yangi qiymat: ${number7B}${number7A}`);
// 8-masala
let number8A = +prompt("A sonini kiriting");
let number8B = +prompt("B sonini kiriting");
console.log(`birinchi raqam: ${number8A}`);
console.log(`ikkinchi raqam: ${number8B}`);
console.log(`va ularni yig'indisi: ${number8A + number8B}`);

const myName = "qwertyuiop asdfghja";

console.log(myName[myName.length - 1]);

//  8-masala
let totalSeconds = +prompt("Kun boshidan boshlab o'tgan sekundlarni kiriting:");
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(`${hours} soat, ${minutes} minut, ${seconds} sekund`);

// 9-masala
let number9A = +prompt("To'g'ri to'rtburchakning a tomonini kiriting:");
let number9B = +prompt("To'g'ri to'rtburchakning b tomonini kiriting:");
let area = number9A * number9B;
let perimeter = 2 * (number9A + number9B);
console.log(`Yuza: ${area}`);
console.log(`Perimetr: ${perimeter}`);

// 10- masala
let d = +prompt("Aylananing diametrini kiriting:");
let pi = 3.14;
let r = d / 2;
let circumference = pi * d;
let are = pi * r ** 2;
console.log(`Uzunligi: ${circumference}`);
console.log(`Yuzasi: ${are}`);

// 11- masala
let A = +prompt("Kubning yon tomonini kiriting:");
let volume = a ** 3;
let surfaceArea = 6 * A ** 2;
console.log(`Hajmi: ${volume}`);
console.log(`To'la sirti: ${surfaceArea}`);
