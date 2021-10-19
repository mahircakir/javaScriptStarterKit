console.log("hello world")

//js type safe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "Ankara"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2

console.log(euroDun)

let konutKredileri = ["deneme", "anaan", "baban"]

for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log(element)
}

