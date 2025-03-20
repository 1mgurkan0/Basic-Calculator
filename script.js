let ekran = document.querySelector("#ekran");
ekran.value = "0";

let sayi1 = null;
let islem = null;


for (let i = 0; i <= 9; i++) {
    document.querySelector("#button" + i).addEventListener("click", function () {
        ekranaYaz(i);
    });
}

document.querySelector("#buttonTopla").addEventListener("click", toplamaBaslat)
document.querySelector("#buttonCikar").addEventListener("click", cikarmaBaslat)
document.querySelector("#buttonCarp").addEventListener("click", carpmaBaslat)
document.querySelector("#buttonBol").addEventListener("click", bolmeBaslat)
document.querySelector("#buttonClear").addEventListener("click" , temizle)
document.querySelector("#buttonNokta").addEventListener("click" , nokta)
document.querySelector("#button0").addEventListener("click" , sifir)
document.querySelector("#buttonEsittir").addEventListener("click", sonucuHesapla)

function ekranaYaz(rakam) {
    if (ekran.value === "0") {
        ekran.value = rakam.toString()
    } else {
        ekran.value += rakam.toString()
    }
}

function toplamaBaslat() {
    sayi1 = parseFloat(ekran.value) 
    islem = "+"; 
    ekran.value = "0"; 
}

function cikarmaBaslat(){
    sayi1 = parseFloat(ekran.value)
    islem = "-"; 
    ekran.value = "0";
}

function carpmaBaslat(){
    sayi1 = parseFloat(ekran.value)
    islem = "x"; 
    ekran.value = "0";
}

function bolmeBaslat(){
    sayi1 = parseFloat(ekran.value)
    islem = "/"; 
    ekran.value = "0";
}

function temizle(){
    islem = "Clear"
    ekran.value="0"
}
function nokta(){
    if (!ekran.value.includes(".")) { 
        ekran.value += ".";
}
}
function sifir(){
    islem = "0"
    ek
}
function sonucuHesapla() {
    if (sayi1 !== null && islem === "+") {
        let sayi2 = parseFloat(ekran.value)
        let sonuc = sayi1 + sayi2 
        ekran.value = sonuc
        sayi1 = null
        islem = null
    }
    else if (sayi1 !== null && islem === "-")  {
        let sayi2 = parseFloat(ekran.value)
        let sonuc = sayi1 - sayi2 
        ekran.value = sonuc 
        sayi1 = null
        islem = null
    }
    else if (sayi1 !== null && islem === "x")  {
        let sayi2 = parseFloat(ekran.value)
        let sonuc = sayi1 * sayi2 
        ekran.value = sonuc 
        sayi1 = null
        islem = null
    }
    else if (sayi1 !== null && islem === "/")  {
        let sayi2 = parseFloat(ekran.value)
        let sonuc = sayi1 / sayi2 
        ekran.value = sonuc 
        sayi1 = null
        islem = null
    }
}