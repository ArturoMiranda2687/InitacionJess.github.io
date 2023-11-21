const contestrellas = document.querySelector('.estrellas-container')
const contenedorInicio = document.querySelector('.contenedorinicio')
const contenedorInicio2 = document.querySelector('.contenedorinicio2')

const cantidadEstrellas = 200;

for (let i = 1; i <= cantidadEstrellas; i++) {
    let estrella = document.createElement('div');
    estrella.classList.add('estrella');

    const top = Math.random() * 100;
    const left = Math.random() * 100;

    estrella.style.top = `${top}%`;
    estrella.style.left = `${left}%`;

    const randomValue = Math.random();

    if (randomValue < 0.05) {
        estrella.classList.add('animacionEstrella');
    }

    contestrellas.appendChild(estrella);
}


const botones = [
    { nombre: "Invitación Jess", ruta: "./Inv Jess/invjess.html" },
    { nombre: "Invitación Polaroid", ruta: "./invitaciónphoto/inicio.html" },
    { nombre: "Invitación Josecito", ruta: "./invjosecito/inicio.html" },
    { nombre: "Invitación Arturo", ruta: "./invarturo/inicio.html" }
];


botones.forEach(invitacion => {
    const botonHome = document.createElement('div');
    botonHome.classList.add('botonhome');

    const enlace = document.createElement('a');
    enlace.href = invitacion.ruta;
    enlace.textContent = invitacion.nombre;

    botonHome.appendChild(enlace);
    contenedorInicio.appendChild(botonHome);
});

const botones2 = [
    { nombre: "XV AÑOS", ruta: "./xvaños/inicio2.html" },
    { nombre: "XV AÑOS FLORAL", ruta: "./xvañosflotante/inicio.html" }
];


botones2.forEach(boton2 => {
    const botonHome2 = document.createElement('div');
    botonHome2.classList.add('botonhome');

    const enlace = document.createElement('a');
    enlace.href = boton2.ruta;
    enlace.textContent = boton2.nombre;

    botonHome2.appendChild(enlace);
    contenedorInicio2.appendChild(botonHome2);
});