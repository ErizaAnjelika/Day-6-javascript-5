/**menghitung luas persegi panjang 
 * Rumus luas persegei panjang = Panjang * lebar
 */

const { result } = require("lodash");

function luasPersegiPanjang(panjang, lebar){
    return luas = (panjang*lebar);  //perkalian panjang dengan lebar untuk mendapatkan luas perse
}
console.log(luasPersegiPanjang(12,4));

/**Konversi Suhu
 * - fahrenheit ke celcius = 'F-32'*5/9
 * - celcius ke fahrenheit = 'C * 9/5'+32
 * 
 */

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9/5 ) + 32;
}

console.log(celciusToFahrenheit(12));
console.log(fahrenheitToCelcius(96));

/** menghitung nilai rata"
 * rumus = jumlah semua data / banyaknya data
 */

function hitungNilaiRataRata(nilai) {
    let sum = 0;
    for (let i = 0; i < nilai.length; i++) {
        sum += nilai[i];
    }    
    return average = Math.round(sum / nilai.length);
}

console.log(hitungNilaiRataRata([1,2,3,4,5]));

/** Palindrom atau bukan
 * - Palindrom adalah suatu kata, frasa, angka, atau urutan karakter lainnya yang memiliki sifat simetri 
 *   atau kebalikan yang sama ketika dibaca dari depan maupun dari belakang. 
 *  Dengan kata lain, palindrom adalah urutan yang tidak berubah jika dibalik.
 * mengembalikan nilai true jika meruaka palindrom
 * mengembalikan false jika bukan palindrom
 * logika kode :
 * - menerima teks kemudian di cek apakah ada karakter non-alfabet
 * - jika ada karakter non-alfabet maka dihapus dari teks
 * - merubah teks menjadi huruf kecil, langkah umum yang digunakan untuk memeriksa palindrom.
 * - merubah teks menjadi array untuk memudahkan membandingkan urutan dan manipulasi.
 * - mengabungkan karakter dalam array menjadi string.
 * - menggunakan percabangan untuk mengembalikan nilai true dan false
 */

// function palindrome(text) {
//     const cleanedText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
//     return cleanedText === [...cleanedText].reverse().join('');
//   }
function palindrome(teks) {
    
    const hapusNonAlfabet = teks.replace(/[^a-zA-Z]/g,'').toLowerCase();//menghapus teks non alfabet dan merubah ke huruf kecil
    const length = hapusNonAlfabet.length;//menghitung length dari teks yang sudah dihapus

    for (let i = 0; i < length / 2; i++) { //melakukan setengah perulangan dari length, karena hanya perlu membandingkan setengan dari palindrom
        if (hapusNonAlfabet[i] !== hapusNonAlfabet[length - 1 - i]) {// membandingkan karakter pertama dengan terakhir, kedua dengan kedua terakhir dst.
            return false;//mengembalikan nilai false 
        }
    }
    return true;//mengembalikan nilai true
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


/** Mencari mean 
 * 
 */

function cariMean(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += (array[i]);
    }
    return mean = Math.round(result / array.length) ;//math.round untuk membulatkan hasil mean ke bilangan bulat terdekat
}
console.log(cariMean([1, 2, 3, 4, 8, 9, 5])); // 5
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
