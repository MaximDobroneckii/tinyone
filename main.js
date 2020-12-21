$(document).ready(function () {
    $('#nav-menu').click(function () {
        $('ul.nav-list').addClass('nav-open').slideToggle('300');

    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
    });
});