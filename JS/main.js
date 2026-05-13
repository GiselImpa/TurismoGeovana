$(document).ready(function() {

    $("#hero-title").delay(300).animate({ opacity: 1 }, 1000);
    $("#hero-subtitle").delay(900).animate({ opacity: 1 }, 1000);
    $("#hero-btn").delay(1500).animate({ opacity: 1 }, 1000);

});
$(".destino-card").hover(
    function() {
        $(this).find("img").css("opacity", "0.85");
    },
    function() {
        $(this).find("img").css("opacity", "1");
    }
);
// CONTADOR ANIMADO
$(".contador").each(function () {
    let $this = $(this);
    let target = parseInt($this.attr("data-target"));
    let count = 0;

    let interval = setInterval(function () {
        count += Math.ceil(target / 100);

        if (count >= target) {
            count = target;
            clearInterval(interval);
        }

        $this.text(count);
    }, 30);
});
// FILTROS DINÁMICOS
$(".filtro").click(function () {

    let filtro = $(this).attr("data-filter");

    // Cambiar estilo de botones
    $(".filtro").removeClass("btn-primary").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");

    if (filtro === "todos") {
        $(".destino").show(300);
    } else {
        $(".destino").hide(300);
        $("." + filtro).show(300);
    }
});
// SISTEMA DE RATING
$(".rating i").on("mouseenter", function () {
    let index = $(this).index();
    let stars = $(this).parent().children("i");

    stars.removeClass("bi-star-fill").addClass("bi-star");

    for (let i = 0; i <= index; i++) {
        $(stars[i]).removeClass("bi-star").addClass("bi-star-fill");
    }
});

$(".rating").on("mouseleave", function () {
    let rating = $(this).attr("data-rating");
    let stars = $(this).children("i");

    stars.removeClass("bi-star-fill").addClass("bi-star");

    for (let i = 0; i < rating; i++) {
        $(stars[i]).removeClass("bi-star").addClass("bi-star-fill");
    }
});

$(".rating i").on("click", function () {
    let index = $(this).index() + 1;
    $(this).parent().attr("data-rating", index);
});
// TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// VALIDACIÓN EN TIEMPO REAL
$("#nombre").on("input", function () {
    if ($(this).val().length < 3) {
        $("#error-nombre").removeClass("d-none");
    } else {
        $("#error-nombre").addClass("d-none");
    }
});

$("#email").on("input", function () {
    let email = $(this).val();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        $("#error-email").removeClass("d-none");
    } else {
        $("#error-email").addClass("d-none");
    }
});

$("#mensaje").on("input", function () {
    if ($(this).val().length < 5) {
        $("#error-mensaje").removeClass("d-none");
    } else {
        $("#error-mensaje").addClass("d-none");
    }
});
// ENVÍO DEL FORMULARIO
$("#form-contacto").submit(function (e) {
    e.preventDefault();

    $("#spinner").removeClass("d-none");

    setTimeout(function () {
        $("#spinner").addClass("d-none");

        let modal = new bootstrap.Modal(document.getElementById("modalConfirmacion"));
        modal.show();

        $("#form-contacto")[0].reset();
    }, 1500);
});
$(".filtro-blog").click(function () {

    let filtro = $(this).attr("data-filter");

    $(".filtro-blog").removeClass("btn-primary").addClass("btn-outline-primary");
    $(this).removeClass("btn-outline-primary").addClass("btn-primary");

    if (filtro === "todos") {
        $(".post").show(300);
    } else {
        $(".post").hide(300);
        $("." + filtro).show(300);
    }
});
$(".ver-comentarios").click(function () {
    $(this).siblings(".comentarios").toggleClass("d-none");
});
function animarScroll() {
    $(".fade-scroll").each(function () {
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let altura = $(window).height();

        if (top < scroll + altura - 100) {
            $(this).addClass("visible");
        }
    });
}

$(window).on("scroll", animarScroll);
$(document).ready(animarScroll);
