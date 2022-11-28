"use strict";

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
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (let i = 0; i < elemsTimeline.length; i++) {
        let elem = elemsTimeline[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
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
window.addEventListener('scroll', progress ); 
function progress() {
    let lenguajes = ["php", "javascript", "java", "mysql", "html", "css"];    

    for (let i = 0; i < progressBars.length; i++) {
        let elem = progressBars[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 50;
        let lenguaje = lenguajes[i];
        if (distInView < 0) {
            elem.classList.add(lenguaje);
        } else {
            elem.classList.remove(lenguaje);
        }
    }
}
progress();
