/*1. Užduotis

Pasinaudodami Typescript ir HTML sukurkite web aplikaciją kuri būtų skirta konvertuoti iš centimetrų į colius.
Atstumas centimetrais įvedamas į vieną input elementą,
paspaudus mygtuką apskaičiuojamas atstumas coliais ir turi būti išvestas į tam tikrą div elementą.
Skaičiavimui sukurkite funkciją.*/
var inputCM = document.getElementById("centimetrai");
var btnSkaiciuoti = document.getElementById("skaiciuoti");
var atsakymas = document.getElementById("atsakymas");
var inches = function (c) {
    return c / 2.54;
};
var centimetras;
var skaiciuoti = function () {
    centimetras = +inputCM.value;
    if (atsakymas != null) {
        atsakymas.innerHTML = "".concat(centimetras, " centimetrai yra ").concat(inches(centimetras), " coliai");
    }
};
if (btnSkaiciuoti != null) {
    btnSkaiciuoti.onclick = skaiciuoti;
}
