// script.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const botonesVolverArriba = document.querySelectorAll('.volver-arriba');

    botonesVolverArriba.forEach(boton => {
        boton.addEventListener('click', function() {
            document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
        });
    });

    const links = document.querySelectorAll('.nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop, // Posición del elemento
            behavior: 'smooth' // Scroll suave
        });
    });
});