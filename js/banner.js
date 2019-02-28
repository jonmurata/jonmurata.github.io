$(document).ready(function () {
    $("#bannertext").fadeIn('slow');

    $(window).on("scroll",function(e){
       if ($(window).scrollTop() < 300) {
           $("#jonnav").removeClass('navactive');
       } else {
           $("#jonnav").addClass('navactive');
       }
    });

    $("#home").click(function () {
        $("html, body").animate(
	    { scrollTop: $("#banner").offset().top }, 1000
        );
    });

    $("#about").click(function () {
        $("html, body").animate(
	    { scrollTop: $("#introduction").offset().top - 100 }, 1000
        );
    });

    $("#teaching").click(function () {
        $("html, body").animate(
            { scrollTop: $("#teachLink").offset().top - 200}, 1000
        );
    });

    $("#projects").click(function () {
        $("html, body").animate(
            { scrollTop: $("#proj").offset().top - 100}, 1000
        );
    });

    $("#academics").click(function () {
        $("html, body").animate(
            { scrollTop: $("#academicsContent").offset().top - 100}, 1000
        );
    });

    $("#more").click(function () {
        $("html, body").animate(
            { scrollTop: $("#extra").offset().top }, 1000
        );
    });
});
