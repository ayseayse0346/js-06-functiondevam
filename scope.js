/*----------- SCOPE-------- */
//!VAR değer değiştirilebilir.hoisted olabilir.

// console.log(sayı1); 
// var sayı1 = 55  //burda bir problem olmaz var her yerde kuanırız.

// console.log(deneme);
// let deneme = 5 // consolu ilk yazdığımız için hata alırız.sıra önemli okuma sırası ama var da önemli değil.

// sayı2 = 33
// var sayı2
// console.log(sayı2);  //hoisting özelliği vardır.

// !const ve let hoisted olmaz
sayı2=33
var result = "hi"

if(sayı2===33){
    let result= "halo" //local scope
    console.log(result); //halo

}
else{
    var result = "salut" //global scope result
}
console.log(result); //global scope

