$("#boton_modal").click(function () {
    $("#modal").addClass("show");
})

$("#cerrar_modal").click(function () {
    $("#modal").removeClass("show");
})

// por tiempo 5 segundos
/*function tiempo() {
    $("#modal").addClass("show");
}
setTimeout(tiempo, 5000);*/

// click por fuera
window.onclick = function (event) {
    if (event.target == modal) {
        $("#modal").removeClass("show");
    }
};

// click tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        $("#modal").removeClass("show");
    }
});

// scroll mas de 600px
/*function onScroll() {
    const scrollTop = window.scrollY;

    if (scrollTop > 600) {
        $("#modal").addClass("show");
    }
}*/
window.addEventListener('scroll', onScroll);


