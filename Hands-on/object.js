//Class Object
function Siswa(nama,kelas) {
    this.nama = nama;
    this.kelas = kelas;
    this.showSiswa = function(){
        console.log(`Nama : ${this.nama}, Kelas: ${this.kelas}`);
    }    
}

const siswa1 = new Siswa("Lala", "3A")
const siswa2 = new Siswa("lili","2B")

siswa1.showSiswa()
siswa2.showSiswa()

//Getter Dan setter
/**
 *  - method get b() mengembalikan hasil dari ( a + 1)
    - method get b() mengupdate properti a dari hasil aritmatika ( x / 2), 
    dengan nilai x sebagai parameter
 */

const myObj ={
    a : 7,
    get b(){
        return this.a+1;
    },
    set c(x){
        this.a = x/2;
    }, 
};

const newValue = myObj.a;
console.log(newValue);
console.log(myObj.b);
myObj.c=50;
console.log(myObj.a);