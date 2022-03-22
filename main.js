// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 49
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let tazenaCisla = [];
let poleVitezu = document.querySelector('#vyherni-cisla');

//Dělám seznam čísel v osudí
 
function losuj() {

    for (let i = 0; i < 7; i = i + 1) {
        vyberMicek();
    }

    zapisHistorie();
}

function vyberMicek() {

    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }
    
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);

    poleVitezu.innerHTML += '<span class="cislo">' + vyherniCislo + '</span>';
}

function zapisHistorie() {
    let historie = document.querySelector('#historie');
    historieTahu = ['...'];
    historieTahu.unshift(tazenaCisla);
    historie.innerHTML = '<span>' + historieTahu + '</span>';
}

function znovu() {
    osudi = [];
    tazenaCisla = [];
    poleVitezu.innerHTML = [];
}