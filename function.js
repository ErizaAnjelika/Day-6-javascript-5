/** Function
 * - blok kode yang dirancang untuk melakukan tugas tertentu.
 * - function dapat dipanggil kapan saja
 * - function dapat disimpan dalam variabel, dikirim sebagai argumen ke function lain,
 *   bahkan dapat dikembalikan sebagai nilai function. 
 */

/** Membuat function, memanggil function, mengembalikan nilai
 * - dibuat dengan kata kunci 'function', diikuti 'namaFunction', dan kurung kurawa'{}'.
 * - function dipanggil dengan namafuction diikuti dengan tanda kurung ().
 * - jika function ada parameter dimasukkan dalam tanda kurung.
 * - mengembalikan nilai dengan menggunakan kata kunci return.
 * - jika function tidak mengembalikan nilai, yang dikembalikan undefined.
 */


//contoh fungsi tanpa parameter
function myFuction(){
    return `Ini fungsi`
}
console.log(myFuction());

//contoh fungsi dengan parameter
function namaFunction(nama) {
    return `Hello ${nama}`
}
console.log(namaFunction("alice"));

/**Variabel scope
 * - variabel didalam function yang dapat diakses di dalam function(local scope).
 * - variabel yang dideklarasikan diluar function dapat diakses dari dalam function(global scope). 
 */

//contoh cara menggunakan variabel function

let variabelGlobal = "Ini variabel global";
function variabelScope() {
    let variabelLocal = "Ini variabel lokal";
    console.log(variabelGlobal);//dapat diases
    console.log(variabelLocal);//dapat diakses
}
variabelScope();
console.log(variabelGlobal);
//console.log(variabelLocal); // akan error karena tidak dikenal diluar fungsi

/**Function sebagai nilai
 * - fucntion dapat digunakna sebagai nilai sama seperti variabel.
 * - function yang digunakan sebagai nilai dapat disimpan dalam variabel atau dapat 
 *   digunakan sebagai argumen ke function lain
 */

//contoh function sebagai nilai

let variabelFunction = function(){
    console.log( `Ini function variabelFunction`);
}

function nilaiFunction(callback) {
    console.log(`Ini function nilaiFunction`); 
    callback();
}

nilaiFunction(variabelFunction);

/**Function arrow
 * - adlah cara baru untuk menulis function dalam javascript.
 * - menggunakan tanda panah '=>' untuk menggantikan fungsi kata kunci function.
 * - dapt menyingkat penulisan function yang sederhana.
 */

//contoh penggunaan function arrow

let functionArrow = (nama)=>{
    return `Hallo ini adalah ${nama}`
}

console.log(functionArrow("fungsi Arrow"));


//Hands on

 function namaFunction() {
    console.log(`ini function`);
 }
namaFunction()

//menjalankan function secara langsung
// (function (nama) {
//     console.log('ini parameter');
// })();


//Retunt atau mengembalikan nilai
function kali(val1,val2) {
    const result = val1 * val2;
    return result;
}
console.log(kali(1,4));

//input 1.000.000
//outout : Rp1.000.000,-
function rupiah(nominal) {
    return`Rp.${nominal},-`;
}
const nominal1 = rupiah("1.000.000")
console.log(nominal1);

//function scope
const nama1 = "lala"
function sayHi(){
    const pesan = "Hi," + nama1;
    console.log(pesan);
    const nama2 = "Reza"
}

console.log(nama1);

//kode ini masih error
function palindrome(string){
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        newString = string[i] + newString;  
    }
    if (newString === string) {
            return true;
        }else{
            return false;
        }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false