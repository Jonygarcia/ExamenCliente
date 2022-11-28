"use strict";

function validateForm() {
    let regName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regPhone = /^\d{9}$/;
    let regMail = /^\w+@(\w+\.)+\w{2,4}$/;

    let name = document.getElementById("name");
    let phonenumber = document.getElementById("phonenumber");
    let reason = document.getElementById("reason");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    //Validar name
    if (!name.value) {
        alert("El nombre no puede estar vacío");
        name.focus();
        return false;
    }

    if (!regName.exec(name.value)) {
        alert("El nombre solo admite letas y espacios");
        name.focus();
        return false;
    }

    //Validar phonenumber
    if (!phonenumber.value) {
        alert("El número de teléfono no puede estar vacío");
        name.focus();
        return false;
    }

    if (!regPhone.exec(phonenumber.value)) {
        alert("El número debe contener 9 dígitos numéricos");
        name.focus();
        return false;
    }

    // Validar reason
    if (!reason.value) {
        alert("El asunto no puede estar vacío");
        reason.focus();
        return false;
    }

    // Validar email
    if (!email.value) {
        alert("El email no puede estar vacío");
        email.focus();
        return false;
    }

    if (!regMail.exec(email.value)) {
        alert("El email no tiene el formato correcto");
        email.focus();
        return false;
    }

    // Validar message
    if (!message.value) {
        alert("El mensaje no puede estar vacío");
        message.focus();
        return false;
    }

    return true;
}

window.onload = function () {
    let form = document.getElementById("contactForm");
    form.onsubmit = validateForm;
};
