//ulang = true;

//while(ulang){
  //  console.log('pengulangan');
//ulang = confirm('lagi ?');
//}

//let nilaiAwal = 20;
//while(nilaiAwal <= 10){
    //console.log("ini penggulangan ke - " + nilaiAwal +"X");
  //  nilaiAwal++
//}

//let nilaiAwal2 = 20;
//do {
//console.log("ini penggulangan dengan do while ke - " +nilaiAwal2 +"X");
//nilaiAwal2--;
//}while(nilaiAwal2 >= 10)


//for(let i = 1; i<=6; i++){
//console.log("mobil dengan nomor  ke - "+ i+" beroperasi dengan benar");
//}
//for(let i = 7; i<=10; i++){
   // console.log("mobil dengan nomor  ke - "+ i+" tidak beroperasi");
    //} 

    //let jml_mobil = 10;
    //let mobil_benar = 8;
    //let nomor_mobil = 1;

    // while(nomor_mobil <=mobil_benar){
    //     console.log('mobil dengan nomor'+nomor_mobil+'beroperasi deangan benar')
    //     nomor_mobil++
    // }

    // for (let i = 0; i < Array.length; i++){
    //     //ini statment 
    // }
 
    // 
    //for (nomor_mobil + 1; mobil_benar <= jml_mobil; nomor_mobil++){
      //  console.log('mobil dengan nomor'+ nomor_mobil + 'tidak beroperasi');
    //}

    for(let angka = 1; angka <= 10; angka++){
    if (angka % 2 === 0 && angka % 5 === 0){
        console.log(" plugin ");
    }else  if (angka % 5 === 0){
        console.log(" in ");
    }else if (angka % 2 === 0){
        console.log("plug");
    }else{
        console.log(angka);
    }
}