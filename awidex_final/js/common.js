$(document).ready(function () {

    $.fancybox.defaults.fullScreen = {
        autoStart: true
    };
    /*****************************************/
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
    });
    $('.menu-burger__header').click(function () {
        $('.mobile_menu').addClass('open_mob_menu');
    })
    $('.close_mob_menu').click(function () {
        $('.mobile_menu').removeClass('open_mob_menu');
        $('.menu-burger__header').removeClass('open-menu');
    })
    /**********************************************/
    new WOW().init();
    /**********************************************/
    $('.open_popup').click(function () {
        $('.popup-form').fadeIn();
        $('.black_wrapper').fadeIn();
    })

    $('.black_wrapper, .close_pop').click(function () {
        $('.popup-form').fadeOut();
        $('.black_wrapper').fadeOut();
    })
    /**********************************************/
    $('.portfolio_slider_wrapper').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $(".portfolio_slider").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var slidesToShow = slick.slickGetOption('slidesToShow');
        var curPage = parseInt((i - 1) / slidesToShow) + 1;
        var lastPage = parseInt((slick.slideCount - 1) / slidesToShow) + 1;
        $('.current_slides').text("0" + curPage);
        $('.all_slides').text("/ 0" + lastPage);
    });

    $('.portfolio_slider .slick-prev').click();

 


    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
   $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    
    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

   

});