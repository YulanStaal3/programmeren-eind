console.log('testje');

// ophalen h1 & blote pannenkoek

const tekst = document.querySelector("h1");
const pannenkoekImg = document.querySelector("main img");

// ophalen topping buttons

const stroopKnop = document.querySelector("#stroop");
const aardbeiKnop = document.querySelector("#aardbei");
const bosbesKnop = document.querySelector("#bosbes");
const slagroomKnop = document.querySelector("#slagroom");

// ophalen alle topping-buttons

const toppingKnoppen = document.querySelectorAll(".topping");

// ophalen alleen topping img 

const alleenStroop = document.querySelector(".alleenstroop img");
const alleenAardbei = document.querySelector(".alleenaardbei img");
const alleenBosbes = document.querySelector(".alleenbosbes img");
const alleenSlagroom = document.querySelector(".alleenslagroom img");

// arrays topping, tekst & achtegrondkleur

let toppings = [alleenStroop, alleenAardbei, alleenBosbes, alleenSlagroom];
let textjes = ["Strooppie 🤎", "Oehh aardbei ❤️", "Lekker bosbesjes 💙", "Hmmmm slagroom 🤍"]
let achtergrondKleur = ["#6f4f28", "#840404", "#00007e", "#ecc19f"]; 

// ophalen buttons beneden

const beginOpnieuw = document.querySelector("#begin-opnieuw");
const klaar = document.querySelector("#klaar");

// ophalen h1 

const h1Element = document.querySelector('h1');
const audio = document.querySelector("#audiosound");

// functie aanmaken om toppings zichbaar te maken

function addTopping(counter) {
    if (toppings[counter].style.visibility == "hidden" || toppings[counter].style.visibility == "") {
        toppings[counter].style.visibility = "visible";
        h1Element.textContent = textjes[counter];
        document.body.style.backgroundColor = achtergrondKleur[counter];
    } else {
        toppings[counter].style.visibility = "hidden";
        h1Element.textContent = "Decoreer je eigen pannenkoek!"
        document.body.style.backgroundColor = "";
    }
}

// topping op pannenkoek functie aanspreken

stroopKnop.addEventListener('click', function () {
    addTopping(0)
});

aardbeiKnop.addEventListener('click', function () {
    addTopping(1)
});

bosbesKnop.addEventListener('click', function () {
    addTopping(2)
});

slagroomKnop.addEventListener('click', function () {
    addTopping(3)
});

// loop gaat door alle knoppen 
// i = 0 begint bij eerste knop, loop gaat door zolang i kleiner is aantal knoppen, 1 bij opgeteld
for (let i = 0; i < toppingKnoppen.length; i++) {
        toppingKnoppen[i].addEventListener("click", function () {
        toppingKnoppen[i].classList.toggle("selected"); // Zet de class 'selected' aan en uit (toggle) 
        console.log(i); // Laat in de console zien welke knop is geklikt (waarde van i)
    });
}

function reset() {
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].style.visibility = "hidden";
    }

    for (let i = 0; i < toppingKnoppen.length; i++) {
        toppingKnoppen[i].classList.remove("selected");
    }

    h1Element.textContent = "Decoreer je eigen pannenkoek!"
    document.body.style.backgroundColor = "";
    audio.play();
}

beginOpnieuw.addEventListener('click', reset);

// alert functie toevoegen
klaar.addEventListener('click', function () {
    alert('Je pannenkoek is klaar, eetsmakelijk! :)')
});

// BRONNEN:
// https://dlo.mijnhva.nl/d2l/le/lessons/609334/topics/2373800
// https://softauthor.com/javascript-for-loop-click-event-issues-solutions/ 
// https://dlo.mijnhva.nl/d2l/le/lessons/609334/topics/2373825
// https://www.w3schools.com/js/js_popup.asp
// https://www.w3schools.com/js/js_loop_for.asp
// https://github.com/PleuniBrans/js-pizza-2/blob/main/script.js
// https://dlo.mijnhva.nl/d2l/le/lessons/609334/topics/2373803
// https://www.youtube.com/watch?v=H3e1yJeQV1E
// https://www.youtube.com/watch?v=yQ1fz8LY354
// https://www.w3schools.com/js/js_if_else.asp
// https://stackoverflow.com/questions/9419263/how-to-play-audio
// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp





















