$(function() {

    // Auto-generate carousel indicator html
    var bootCarousel = $(".carousel");
    bootCarousel.append("<ol class='carousel-indicators'></ol>");
    var indicators = $(".carousel-indicators");
    bootCarousel.find(".carousel-inner").children(".item").each(function(index) {
        (index === 0) ?
        indicators.append("<li data-target='#MyCarousel' data-slide-to='" + index + "' class='active'></li>") :
        indicators.append("<li data-target='#MyCarousel' data-slide-to='" + index + "'></li>");
    });


    // ### Other Bootstrap Carousel Options ###

    // Carousel remove button classes from captions
    $('.carousel-caption a').removeClass('btn btn-large btn-primary').addClass('caption-link');

    // Add count class for captions to style individually
    $('#myCarousel .item').each(function(i) {
        $(this).find('.carousel-caption').addClass('caption-' + (i+1));
    });

    // Init Bootstrap Carousel
    $('.carousel').carousel({
        interval: 8000
    });

});