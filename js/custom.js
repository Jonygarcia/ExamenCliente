"use strict";
// Constantes para los popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Mostrar el mensaje de bienvenidos con delay con un efecto fade
function fadeText() {
    let presentacion = document.getElementsByClassName("presentacion");

    if (presentacion.classList.contains("hide-text")) {
        presentacion.classList.remove("hide-text");
        presentacion.classList.add("show-text");
    }
}

// Mostrar el timeline según se haga scroll
let elemsTimeline = document.querySelectorAll(".timeline");
window.addEventListener('scroll', fadeIn);
function fadeIn() {
    for (let i = 0; i < elemsTimeline.length; i++) {
        let elem = elemsTimeline[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 150;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();

// Rellenar las barras de los lenguajes cuando el scroll llegue a su posición
let progressBars = document.querySelectorAll(".progress-bar");
window.addEventListener('scroll', progress);
function progress() {
    let lenguajes = ["php", "javascript", "java", "mysql", "html", "css"];

    for (let i = 0; i < progressBars.length; i++) {
        let elem = progressBars[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 10;
        let lenguaje = lenguajes[i];
        if (distInView < 0) {
            elem.classList.add(lenguaje);
        } else {
            elem.classList.remove(lenguaje);
        }
    }
}
progress();

// MouseOver de los enlaces del navbar
document.getElementById("sobremi-link").addEventListener("mouseover", mouseOn);
document.getElementById("sobremi-link").addEventListener("mouseout", mouseOut);
document.getElementById("formacion-link").addEventListener("mouseover", mouseOn);
document.getElementById("formacion-link").addEventListener("mouseout", mouseOut);
document.getElementById("experiencia-link").addEventListener("mouseover", mouseOn);
document.getElementById("experiencia-link").addEventListener("mouseout", mouseOut);
document.getElementById("habilidades-link").addEventListener("mouseover", mouseOn);
document.getElementById("habilidades-link").addEventListener("mouseout", mouseOut);
document.getElementById("contacto-link").addEventListener("mouseover", mouseOn);
document.getElementById("contacto-link").addEventListener("mouseout", mouseOut);

function mouseOn() {
    this.classList.remove("text-white");
    this.classList.add("text-warning");
}

function mouseOut() {
    this.classList.remove("text-warning");
    this.classList.add("text-white");
}
