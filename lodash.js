/** Lodash
 * - merupakan library javascript yang populer dan serbaguna.
 * - menyediakan banyak fungsi utilitas untuk memenipulasi dan memproses data secara efisien.
 * - untuk menggunakan lodash tambahkan script lodash ke ahlaman web menggunakan tag script.
 * - atau dengan menginstal lodash menggunakan manajer paket npm atau yarn.
 */

/** Penggunaan lodash dalam kode javascript dan install npm
 * Dalam kode javascript :
 * <script src="https://cdn.jsdelivr.net/lodash/4.17.15/lodash.min.js"></script>
 * 
 * install memalui command :
 * npm install lodash
 */

// Fungsi - fungsi lodash

/**_.map()
 * - fungsi digunakan untuk memetakan setiap elemen dari sebuah array menjadi nilai baru menggunakan fungsi callback.
 */

//library untuk memuat lodash
const _ = require('lodash');// Memuat library Lodash

// Kemudian Anda dapat menggunakan fungsionalitas Lodash dengan alias _

//contoh kode map
const array =[1,2,3];
const newArray = _.map(array,function(n){
    return n * 2;
});
console.log(newArray);//[2,3,4]

/** _.filter()
 * - fungsi digunakan untuk memfilter setiap elemen dari sebuah array.
 * - menggunakan fungsi callback dan mengembalikan array baru yang mer isi elemen yang lolos.
 */
 const array1 = [1,2,3,4,5];
 const filterArray = _.filter(array1,function(a){
    return a % 2 === 0;
 });

 console.log(filterArray);//[2,4]

 /**_.reduce()
  * - fungsi untuk mengurangi sebuah array menjadi nilai tunggal 
  * - menggunakan fungsi callback
  */

 const array2 = [1,2,3];
 const total = _.reduce(array2,function(sum, b){
    return sum + b;
 },0);//menggunakan nilai awal 0 
 console.log(total); //6

 /**_.chunk()
  * - Digunakan untuk memecah array menjadi beberpa bagian(chunk) sesuai dengan ukuran yang ditentukan
  * - berguna untuk membagi array agar lebih mudah diolah.
  */

 const array3 = [1,2,3,4,5,6,7,8,9,11,12,34,56];
 const chunkArry = _.chunk(array3 ,3 );

 console.log(chunkArry);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 11, 12, 34 ], [ 56 ] ]  


/**_.union
 * - untuk menggabungkan beberapa array kedalam list
 */

//contoh penggunaan union

const larik1 = [1,2,3];
const larik2 = [2,3,4];
const larik3 = [3,4,5];

const larikGabungan = _.union(larik1,larik2,larik3);
console.log(larikGabungan);// [1,2,3,4,5]

/**_.uniq
 * - berfungsi untuk menghilangkan nilai duplikat didalam array.
 * - menghasilkan salinan dari array hanya ber isi elemen-elemen unik.
 */

const arrayDuplikat = [2,2,3,3,5,5,6];
const arrayUnik =_.uniq(arrayDuplikat);

console.log(arrayUnik);//[2,3,5,6]

/**_.find
 * - Untuk mencari elemen pertama dalam array atau objek yang memenuhi kriteria tertentu 
 * - ditentukan dalam sebuah fungsi predikat.
 * - fungsi akan mengembalikqn elemen pertama yang memenuhi kriteria.
 * - 'undefined' jika tidak ada elemen yang cocok.
 */

//contoh penggunaan find

const sekolah =[
    {nama:'Alice',kelas:'12 TSM',umur : 16},
    {nama:'risma',kelas:'12 Tata Boga',umur : 15},
    {nama:'bob',kelas:'12 RPL',umur : 17},        
];

const siswa =_.find(sekolah,{nama : "bob"});
console.log(siswa);

/**_.difference
 * - untuk menghitung perbedaan anatara 2 atau lebih array.
 * - mengambil 1 array sebagai basis dan lainnya sebagai argumen.
 * - mengembalikan array baru berisi elemen dari array basis yang tidak ada di array lain.
 * intinya mencari nilai elemen yang ada di array1 dan tidak ada di array2
 */

//contoh penggunaan difference
 const data1 = [1,2,3,4,6,7];
 const data2 = [4,5,6,7,8,9];

 const differenceArray = _.difference(data1, data2);
 
 console.log(differenceArray);//[1,2,3]

 //hands on
 const string = _.camelCase([])