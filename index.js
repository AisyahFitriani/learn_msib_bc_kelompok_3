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

//tipe data object & array
// Object adalah type data yang memiliki key dan dapat menampung berbagai type data di dalam 1 waktu
// contoh type data object seperti dibawah ini.
let object1 = {
  key:'key',
  nomor: 1,
  object_remaja :{
      key_remaja:'key remaja',
      nomor_remaja:'nomor remaja'
  }
}
console.log('tampilkan object: ', object1, object1.nomor, object1["key"], object1.object_remaja.nomor_remaja);

// array adalah type data yg memiliki beberapa data dgn type yg berbeda-beda.
let array1 = ["A", "B", 5, 6.1, true, false, {"key" : "value"}];

console.log("menampilkan array1 : ", array1);

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

// perulangan digunakan untuk mengeksekusi statement program di dalam block perulangan secara berulang-ulang
// ada beberapa perulangan, umumnya yaitu for loop, while loop, do while loop

//contoh penerapan for loop yaitu
for (i = 0; i < 15; i++) {
  // block perulangan
  console.log('perulangan for loop ke: ', i);
}

//contoh perulangan while loop yaitu
let j = 0;
while (j <= 6) {
// block perulangan
console.log('perulangan while loop ke: ', j);
j++;
}

//contoh perulangan do while loop
let k = 5;
do {
  //block perulangan
  console.log('perulangan do while loop ke: ', k);
  --k;
} while(k >= 1);

//Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.

//contoh pendefinisian fungsi 
function hitungPanjangString(string) {
  // block fungsi
  const panjang_string = string.length;
  console.log('panjang string fungsi adalah: ', panjang_string);

  return panjang_string;
}

//Pemanggilan fungsi hitung string
hitungString('test 1 2 3');

//contoh fungsi tanpa parameter
function ucapan selamat() {
  const selamat = congratulation;

  console.log('ucapan selamat: ', selamat);

  return selamat;
}

ucapan selamat();
