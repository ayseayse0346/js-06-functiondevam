// ? 3-arrow fonksiyon tanımlaması

const mesajVer = ()=> console.log("js is a browser language");

// ? invoke 
mesajVer()

// ?örnek2
const kareAl = (x)=> x*x

console.log(kareAl(3));

// ? örnek3

const yasHesapla = (yıl)=>2024-yıl
const yıl = +prompt("doğum yılı:")
console.log(`yaşınız ${yasHesapla(yıl)} dır`);

// ?örnek
// const mesajVer1 = ()=>{
//     console.log("süslü arrow");
// }

// mesajVer1()

// ?örnek 
const careAl1=(x)=>x*x
console.log(careAl1(4));

/* ornek:bir fonksiyon içinde başka fonksiyon cağrılabilir.
hesap makinası örneği

*/
const topla = (s1,s2)=> s1+s2
const çarp = (s1,s2)=> s1*s2
const çıkar = (s1,s2)=> s1-s2
const böl = (s1,s2)=> s1/s2
const hesapla =(num1,num2,op)=>{
    let sonuc =0
    switch (op) {
        case "+":
            sonuc = topla(num1,num2)
            break;
        case "-":
            sonuc = çıkar(num1,num2)
            break;
        case "*":
            sonuc = çarp(num1,num2)
            break;
        case "/":
            sonuc = böl(num1,num2)
            break;
    
        default:
            alert("yanlış işlem")
            break;
    }
    return sonuc
}

const num1 = +prompt("1.Sayi:")
const op = prompt("Islemi giriniz: +,-,*,/:")
const num2 = +prompt("2.Sayi:")

const sonuc =hesapla(num1,num2,op)
console.log(`${num1}${op}${num2}=${sonuc}`);