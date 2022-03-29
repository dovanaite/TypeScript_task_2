/*1. Užduotis

Pasinaudodami Typescript ir HTML sukurkite web aplikaciją kuri būtų skirta konvertuoti iš centimetrų į colius. 
Atstumas centimetrais įvedamas į vieną input elementą, 
paspaudus mygtuką apskaičiuojamas atstumas coliais ir turi būti išvestas į tam tikrą div elementą. 
Skaičiavimui sukurkite funkciją.*/

const inputCM = <HTMLInputElement>document.getElementById("centimetrai");
const btnSkaiciuoti = document.getElementById("skaiciuoti");
const atsakymas = document.getElementById("atsakymas");


const inches = (c:number)=>{
    return c/2.54
}

let centimetras:number;

const skaiciuoti = ()=>{

centimetras=+inputCM.value;

if(atsakymas!=null){
atsakymas.innerHTML=`${centimetras} cm yra ${inches(centimetras)} coliai`
}

}

if(btnSkaiciuoti!=null){
    btnSkaiciuoti.onclick=skaiciuoti;
}

