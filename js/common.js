$(document).ready(function() {

    // Слайдер в блоке about
    $('.about-slider_list').show().bxSlider({
        preloadImages: 'all'
    });

    //Лайтбокс для галереи в блоке place
    $("[data-fancybox]").fancybox({
        // Options will go here
    });

});