$(document).ready(function() {

    var $carousel = $('.js-carousel');

    $carousel.flickity({
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 4500,
        wrapAround: true
    });
});