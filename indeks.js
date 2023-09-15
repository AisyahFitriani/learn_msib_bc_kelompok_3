// Deklarasi variabel menggunakan var
var angka = 20;

// Deklarasi variabel menggunakan let (lebih umum digunakan saat ini)
let nama = "Steven";

// Deklarasi konstanta menggunakan const (nilainya tidak dapat diubah)
const PI = 3.14;

// Mengakses variabel
console.log(angka); // Output: 20
console.log(nama);  // Output: Steven
console.log(PI);    // Output: 3.14

let usia = 20;

if (usia >= 20) {
    console.log("Anda dewasa.");
  } else {
    console.log("Anda masih anak-anak.");
  }

  let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari untuk santai.");
    break;
  default:
    console.log("Hari tidak valid.");
}