console.log("selammm");

const degisken1="ali";
console.log(degisken1);
// const degisken1="ali2"; olmaz

let degisken2="ela";
// let degisken2="ela2"; olmaz
degisken2="ela_new";    
console.log(degisken2)

var degisken3="onur"
var degisken3="onur_new"
console.log(degisken3)

function topla(x, y) {
  return x + y;
}

function carp(x,y) {
    return x*y;
}
console.log(carp(5,5));

const carp2 = (x,y) => x*y;
console.log(carp2(5,5))


let x = 1;
if (x == 1) {
    console.log("x birdir");
}
else{
  console.log("x bir değildir");
}


let toplam = 0;
for (let i = 1; i < 4; i++) {
    
    toplam += i;
    console.log(toplam)
}

const add =(...args)=>{
    let total = 0;
  for (let i = 0; i < args.length; i++) {
      total += args[i];
  }
  return total;
}
console.log(add(1,2,3,4,5,6,7,8,9,10))


let urunler=[{
    urunadi:"Elma",
    adet:2,
    fiyat:10
},{
    urunadi:"Armut",
    adet:5,
    fiyat:35
},{
    urunadi:"Limon",
    adet:8,
    fiyat:65
}]

function addToCartNew(urunler){
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)
}
addToCartNew(urunler[0])

let [kitap,defter,silgi]=[
    {urun_adi:"Kitap",adet:40,fiyat:100},
    {urun_adi:"Defter",adet:30,fiyat:30},
    {urun_adi:"Silgi",adet:20,fiyat:10},
]
console.log(kitap.adet)

//filter

const sayilar=[1,2,3,4,5,6,7,8,9,10]

const teksayilar=sayilar.filter(sayi=>sayi%2===1);
console.log(teksayilar)

//Find

const numbers=[1,2,3,4,5,6,7,8,9,10]

const ilk_cift_sayi=numbers.find(function(sayi){
    return sayi%2===0;
}
);
console.log(ilk_cift_sayi)

//map fonksiyonu

const num=[1,2,3,4,5,6]

const katSayi=num.map(num=>num*2)
console.log(katSayi)

// reduce fonksiyonu

const nu=[1,2,3,4,5,6]
const toplam_2=nu.reduce((acc,curr)=>acc+curr,100)
console.log(toplam_2)

// forEach fonksiyonu 

const saatdortolmus=[10,20,30,40,50]
saatdortolmus.forEach(saatdortolmus=>{
    console.log(saatdortolmus)
})

//Hata denetimi

try{
    const result=10/0
    console.log(result)
}
catch(error){
console.log("Hata:"+error.message)
}
finally{
    console.log("Her şey bitti...")
}

//Thro Hata Yakalama
function bolmeİslemi(x,y){
    if(y===0){
        throw new Error("Sıfıra Bölme Hatası")
    }
    return x/y
}
try{
    const sonuc=bolmeİslemi(10,0)
    console.log("Sonuc",sonuc)
}
catch(error){
    console.log("Hata Yakalandı "+error.message)
}

