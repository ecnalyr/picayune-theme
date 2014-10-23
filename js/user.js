$(document).ready(function ($) {

    // Bxslider Main Page
    $('.j-main-slider').bxSlider({
        controls: false,
        adaptiveHeight: true,
        auto: true,
        pause: 6000
    });

    // initialize Masonry
    require(['themes/default/js/masonry.pkgd.min.js', 'themes/default/js/imagesloaded.pkgd.min.js'], function (Masonry, Imageloaded) {
        var container = $('#container-masonry').get(0);
        Imageloaded(container, function () {
            var msnry = new Masonry(container, {
                columnWidth: 33.3,
                itemSelector: '.j-masonry-item'
            });
        });
    });

    // DropDown Menu
    $('.j-top_menu-1level li')
        .mouseover(function () {
            $(this).find('.j-dropdown').addClass('is-active');
        })
        .mouseleave(function () {
            $(this).find('.j-dropdown').removeClass('is-active');
        });
});