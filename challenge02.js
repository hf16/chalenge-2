//NOMOR 1
function changeWord(selectedText, changedText, text){
    hasil = text
    let result = hasil.replace(selectedText, changedText);
    return result
}

const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu" 

// console.log(changeWord("mencintai", "membenci", kalimat1))
// console.log(changeWord("bromo", "semeru", kalimat2))


//NOMOR 2
function checkTypeNumber(givenNumber){
    let hasil
    let nilai= givenNumber

    if(typeof nilai === 'number'){
        if (nilai % 2 ==0){

            hasil ="Genap"
        }
        else if(nilai % 2 ==1){
            hasil ="Ganjil"   
        }
        return hasil   
    }

    else if(typeof givenNumber === "undefined"){
        return hasil = "ERROR : Tidak Ada Parameter (Parameter Kosong)"
    }


    else if (typeof nilai != "number"){
        return hasil ="ERROR: Invalid Data Type"
    }  
}
// console.log(checkTypeNumber(10))
// console.log(checkTypeNumber(3))
// console.log(checkTypeNumber("3"))
// console.log(checkTypeNumber({}))
// console.log(checkTypeNumber([]))
// console.log(checkTypeNumber())


//NOMOR 3
function checkEmial(email){
    let filterRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let output= ""
    
    if(typeof email ==="string"){
        if (filterRegex.test(email)){
            output="Valid"
        }
        else if (!filterRegex.test(email)){
            output="Invalid"
        }
        
    return output
    }
    
    else if(typeof email === "undefined"){
        return output = "ERROR : Tidak Ada Parameter (Parameter Kosong)"
    } 

    else if(typeof email != "string"){
        return output = "ERROR : Format Parameter Tidak Sesuai : Harus Menggunakan Format String"
    }
}
// console.log(checkEmial("apranata@binar.co.id"))
// console.log(checkEmial("apranata@binar.com"))
// console.log(checkEmial("apranata@"))
// console.log(checkEmial("apranata"))
// console.log(checkEmial(3322))
// console.log(checkEmial())



//NOMOR 4
function isValidPassword(givenPassword){
    let filterPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (typeof givenPassword === "undefined"){
        return hasil = "ERROR : Tidak Ada Parameter (Parameter Kosong)"
    }

    if (typeof givenPassword === "string"){
        if (filterPassword.test(givenPassword)){
            return true
        }
        else{
            return false
        }
    }

    if (typeof givenPassword != "Stirng"){
        return hasil = "Format Parameter Tidak Sesuai : Harus Menggunakan Format String"
    }
}
// console.log(isValidPassword("Meong2021"))
// console.log(isValidPassword("meong2021"))
// console.log(isValidPassword("@eong"))
// console.log(isValidPassword("Meong2"))
// console.log(isValidPassword(0))
// console.log(isValidPassword())




//NOMOR 5
function getSplitName(personName){
    if (typeof personName != "string"){
        return error = "ERROR: Karena Parameter tidak sesuai"
    }

    else if (typeof personName == "string"){
        const name = personName.split(' ')
        const person = {}
    
        if (name.length === 3) {
            person.firstName = name.shift()
            person.middleName = name.shift()
            person.lastName = name.shift()
            
        } 
        else if(name.length === 2){
            person.firstName = name.shift()
            person.middleName = "Null"
            person.lastName = name.shift()
    
        }
        else if (name.length === 1){
            person.firstName = name.join(' ')
            person.middleName = "Null"
            person.lastName = "Null"
        }
        else if (name.length >3){
            return error = "ERROR: Karena Nama lebih dari 3 karakter"
        }

        return person
    }
}
// console.log(getSplitName("Helmi Farizki Syah"))
// console.log(getSplitName("Helmi Farizki"))
// console.log(getSplitName("Helmi"))
// console.log(getSplitName("Helmi Farizki Syah Putra"))
// console.log(getSplitName(0))




//NOMOR 6
function getAngkaTerbesarKedua(inputan){
    if(typeof inputan === "undefined"){
        return hasil = "ERROR : Karena Parameter Kosong"
    }

    else if (typeof inputan != "object"){
        return error = "ERROR: Karena Tipe Parameter Tidak Sesuai"
    }

    let largestNum = inputan[0];
    let secondLargestNum = 0;
    for(let i = 1; i < inputan.length; i++) {
        if(inputan[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = inputan[i];  
        }

        else if (inputan[i] !== largestNum && inputan[i] > secondLargestNum) {
            secondLargestNum = inputan[i];
        }
    }
    return secondLargestNum
}

const dataAngka = [3,6,1,3,5]
// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());



//NOMOR 7
const dataPenjualPakAldi = [
    {
        namaProduct : 'Sepatu Futsak Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },

    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneker",
        totalTerjual : 37,
    },

    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High - Original',
        kategori : "Sepatu Sneker",
        hargaSatuan : 360000,
        totalTerjual : 90,
    },

    {
        namaProduct : 'Sepatu Warrior Rainbow Tosya Curduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneker",
        totalTerjual : 90,
    },
]

function hitungTotalPenjualan(dataPenjual){
    let sum = 0
    temp = []
    for (let index = 0; index < dataPenjual.length; index++) {
        sum += dataPenjual[index].totalTerjual;
        temp.push(dataPenjual[index].totalTerjual)
      }
      return temp + " : Maka Total Barang Terjual= " +sum
}
// console.log(hitungTotalPenjualan(dataPenjualPakAldi))



//NOMOR 8
const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualan){
    let totalKeuntungan =0;
    let totalModal =0;
    let persentaseKeuntungan =0;
    let produkBukuTerlaris ="";
    let penulisTerlaris=""
    palingTinggi =0;
    for (let index = 0; index < dataPenjualan.length; index++) {
        totalKeuntungan += (dataPenjualan[index].totalTerjual) * (dataPenjualan[index].hargaJual - dataPenjualan[index].hargaBeli)
        totalModal += (dataPenjualan[index].sisaStok + dataPenjualan[index].totalTerjual) * dataPenjualan[index].hargaBeli
        persentaseKeuntungan += totalKeuntungan / totalModal * 100

        //Kondisi mencari produk buku terlaris
        if (dataPenjualan[index].totalTerjual > palingTinggi){
            palingTinggi = dataPenjualan[index].totalTerjual
            produkBukuTerlaris = dataPenjualan[index].namaProduk
            penulisTerlaris = dataPenjualan[index].penulis
        }    
      }
      //Mencari persentase keuntunngan
      persentaseKeuntungan = totalKeuntungan / totalModal * 100
      
      //konvert format rupiah total keuntungan 
      const formatKeuntungan = totalKeuntungan.toString().split('').reverse().join('');
      const convertKeuntungan = formatKeuntungan.match(/\d{1,3}/g);
      const rupiahTotalKeuntungan = 'Rp ' + convertKeuntungan.join('.').split('').reverse().join('')

      //konvert format rupiah total modal
      const formatModal = totalModal.toString().split('').reverse().join('');
      const convertModal = formatModal.match(/\d{1,3}/g);
      const rupiahTotalModal = 'Rp ' + convertModal.join('.').split('').reverse().join('')

      return "Totalkeuntungan: "+ rupiahTotalKeuntungan + "," 
      + "\nTotalmodal :"+ rupiahTotalModal + "," 
      + "\npersentaseKeuntungan: "+ persentaseKeuntungan.toFixed(2) + "%" + ","
      + "\nprodukTerlaris: "+ produkBukuTerlaris +","
      + "\npenulisTerlaris: "+ penulisTerlaris
}
// console.log(getInfoPenjualan(dataPenjualanNovel))

