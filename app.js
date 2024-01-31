// 2-expression fonksiyon

// öce yaz sonra  çağır  

// ?ÖRNEK1
const tekVeyaCift = function(num){
    let sonuç = ""
    if(num%2===0){
sonuç =`${num} çifttir`
    }
    else{
        sonuç = `${num} tektir`
    }
    return sonuç
}


const sonuç = tekVeyaCift(5)
console.log(sonuç);
console.log(tekVeyaCift(4));

// ?örnek2
function usAlma(taban,us){
    return taban**us
}
const usAl= function(taban,us){
    return taban**us
}

const us = usAl(3,4)
console.log(us);

