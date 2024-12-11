$(document).ready(function() {
    // Oculta todos los contenidos del acordeón al cargar la página
    $(".acordeon_contenido").hide();

    // Maneja el clic en los títulos del acordeón
    $(".acordeon_titulo").click(function() {
        var titulo = $(this);
        var contenido = titulo.next(".acordeon_contenido"); // Selecciona el contenido siguiente

        // Cierra cualquier otro acordeón abierto
        $(".acordeon_contenido").not(contenido).slideUp();
        $(".acordeon_titulo").not(titulo).removeClass("active");

        // Alterna el estado del acordeón actual
        contenido.slideToggle();
        titulo.toggleClass("active");
    });
});