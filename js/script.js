$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
        s
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

});


// for the text animation
var typed = new Typed(".trans", {
    strings: ["DARKSKy", "MOTIN ISLAM"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    loopCount: Infinity,
})
// var typed = new Typed(".describe", {
//     strings: ["Don't believe me . i can broke you or i can make you as mine . There is a devil in my own . i have no such compunction, if you are honest to me i can burn this world ! 4you.    "],
//     typeSpeed: 15,
// })
