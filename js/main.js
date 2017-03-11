/*================================================================*/
/* DOM READY
/*================================================================*/
$(document).ready(function(){

    // Disable href="#" only. Does not disable use of anchor/hashtag links.
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // Auto-generate carousel indicator html
    // var bootCarousel = $(".carousel");
    // bootCarousel.append("<ol class='carousel-indicators'></ol>");
    // var indicators = $(".carousel-indicators");
    // bootCarousel.find(".carousel-inner").children(".item").each(function(index) {
    //     (index === 0) ?
    //     indicators.append("<li data-target='#MyCarousel' data-slide-to='" + index + "' class='active'></li>") :
    //     indicators.append("<li data-target='#MyCarousel' data-slide-to='" + index + "'></li>");
    // });

    // Add count class for captions to style individually
    var $carouselItem = $('#MyCarousel .item');
    $carouselItem.each(function (i) {
        $(this).find('.carousel-caption').addClass('caption-' + (i + 1));
    });


    // Initialize: Bootstrap Carousel
    $('.carousel').carousel({
        interval: 8000
    });

    // Initialize: Bootstrap Tooltip
    $("a[rel^='tooltip']").tooltip();
    $('body').tooltip({ selector: '[data-toggle=tooltip]:not([disabled])' });

    // Initialize: Superfish Navigation (desktop)
    $('.sf-menu').superfish({
        delay:       0,
        animation: { height: 'show'},
        animationOut: { height: 'hide'},
        speed:       'fast',
        cssArrows:  false
    });

    // Hide related content section if empty
    (function () {
        var $related = $('.related'),
            $relatedRow = $('.related .row-fluid');

        if ($related.length > 0) {
            if ($relatedRow.children().length === 0) {
                $related.hide();
            }
        }
    })();

    // Responsive Navigation
    (function() {

        var $mainNav      = $('.sf-menu'),
            responsiveNav = '';

        $mainNav.find('li').each(function() {
            var $this   = $(this),
                $link   = $this.children('a'),
                depth   = $this.parents('ul').length - 1,
                indent  = '';

            if( depth ) {
                while( depth > 0 ) {
                    indent += ' - ';
                    depth--;
                }
            }

            if ($link.text()) {
                responsiveNav += '<option ' + ($this.hasClass('active') ? 'selected="selected"':'') + ' value="' + $link.attr('href') + '">' + indent + ' ' + $link.text() + '</option>';
            }

        }).end().after('<select class="nav-responsive">' + responsiveNav + '</select>');

        $('.nav-responsive').on('change', function() {
            window.location = $(this).val();
        });
    })();

});

/*================================================================*/
/* WINDOW.LOAD
/*================================================================*/
$(window).load(function() {

    // Check to only equalize column heights if window width is greater than 768px
    if ($(window).width() > 768) {
       $('.equal').eqHeights();
    }

});