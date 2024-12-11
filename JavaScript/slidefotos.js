$(function () {
    $("#slider").responsiveSlides({
        auto: true,         // Transición automática
        speed: 500,         // Velocidad de transición
        timeout: 3000,      // Tiempo entre transiciones
        pager: false,       // Ocultar paginación
        nav: true,          // Mostrar flechas de navegación
        random: false,      // Orden secuencial
        pause: true,        // Pausa al pasar el mouse
        pauseControls: true // Pausa al interactuar con controles
    });
});
