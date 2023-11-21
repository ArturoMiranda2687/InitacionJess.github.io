const hojasContainer = document.getElementById('hojas-container');
const cantidadHojas = 90;

for (let i = 1; i <= cantidadHojas; i++) {
    const hoja = document.createElement('div');
    hoja.classList.add('hoja');

    const randomAnimation = Math.random() > 0.5 ? 'rebote' : 'rebotea'; // Puedes personalizar la lógica de animación

    hoja.classList.add(randomAnimation);

    // Asignar clases específicas según la posición
    if (i % 2 === 0) {
        hoja.classList.add('large');
    } else if (i % 3 === 0) {
        hoja.classList.add('medium');
    } else {
        hoja.classList.add('small');
    }

    const leftPosition = Math.floor(Math.random() * 200) - 100; // Valores entre -100 y 100
    const bottomPosition = -70 * i; // Ajusta el valor según tu diseño

    hoja.style.left = `${leftPosition}px`;
    hoja.style.bottom = `${bottomPosition}px`;

    hojasContainer.appendChild(hoja);
}
