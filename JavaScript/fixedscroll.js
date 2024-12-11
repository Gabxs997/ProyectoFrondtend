let lastScrollTop = 0; // Última posición del scroll
const header = document.querySelector('.header2'); // Seleccionamos el contenedor del header

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si el scroll va hacia abajo, ocultamos el header
    if (currentScroll > lastScrollTop) {
        header.classList.add('hide');
    } else {
        // Si el scroll va hacia arriba, mostramos el header
        header.classList.remove('hide');
    }

    // Si se ha hecho scroll más de 100px, fijamos el header
    if (currentScroll > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});
