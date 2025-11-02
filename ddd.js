console.log("selammm");

const degisken1="ali";
console.log(degisken1);
// const degisken1="ali2"; olmaz

let degisken2="ela";
// let degisken2="ela2"; olmaz
degisken2="ela3";    
console.log(degisken2)

var degisken3="onur"
var degisken3="onur2"
console.log(degisken3)

function topla(x, y) {
  return x + y;
}

function carp(x,y) {
    return x*y;
}
console.log(carp(5,5));

const carp2 = (x,y) => x*y;
console.log(carp2(6,6))


let x = 1;
if (x == 1) {
    console.log("x babadır");
}
else{
  console.log("x abidir");
}


let toplam = 0;
for (let i = 1; i < 4; i++) {
    
    toplam += i;
    console.log(toplam)
}

