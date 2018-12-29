$(document).ready(function () {
    $("#bannertext").fadeIn('slow');

    $(window).on("scroll",function(e){
       if ($(window).scrollTop() < 300) {
           $("#navbar").removeClass('active');
       } else {
           $("#navbar").addClass('active');
       }
    });

    $("#home").click(function () {
        $("html, body").animate(
	    { scrollTop: $("#banner").offset().top }, 1000
        );
    });

    $("#about").click(function () {
        $("html, body").animate(
	    { scrollTop: $("#introduction").offset().top - 200 }, 1000
        );
    });

    $("#teaching").click(function () {
        $("html, body").animate(
            { scrollTop: $("#teachLink").offset().top }, 1000
        );
    });

    $("#more").click(function () {
        $("html, body").animate(
            { scrollTop: $("#extra").offset().top }, 1000
        );
    });
});
