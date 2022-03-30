jQuery(document).ready(function ($) {

    /*botton to top*/
    $(function () {

        $(window).scroll(function () {

            if ($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 800);

        });

    });

    /****************************************/

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 3000
            });
            show = false;
        }
    });







    $('.portfolio-slider').slick({
        prevArrow: $('.portfolio-left'),
        nextArrow: $('.portfolio-right'),
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,

                    slidesToShow: 3
                }
    },
            {
                breakpoint: 720,
                settings: {
                    arrows: false,

                    slidesToShow: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,

                    slidesToShow: 1
                }
    }
  ]
    });



    $('.reviews-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,

                    slidesToShow: 1
                }
    }
  ]
    });


    $('.open-form-popup').click(function () {
        $('.form-popup').fadeIn();
        $('.black-wrapper').fadeIn();
    })
    $('.close-form-popup, .black-wrapper').click(function () {
        $('.form-popup').fadeOut();
        $('.black-wrapper').fadeOut();
    })

    $('.mobile__open-menu__btn').click(function () {
        $('.mobile-menu').addClass('mobile-menu__active');
    })
    $('.close__mobile-menu, .header-menu li a').click(function () {
        $('.mobile-menu').removeClass('mobile-menu__active');
        $('.mobile-menu').removeClass('mobile-menu__active');
    })
    $('.mobile__open-popup').click(function () {
        $('.mobile-menu').removeClass('mobile-menu__active');
        $('.form-popup').fadeIn();
        $('.black-wrapper').fadeIn();
    })
    $('.form-policy span').click(function () {
        $('.policy').fadeIn();
        $('.black-wrapper').fadeIn();
    })
    $('.black-wrapper, .close-policy').click(function () {
        $('.policy').fadeOut();
        $('.black-wrapper').fadeOut();
    })



    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });


    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").each(function () {
        $(this).submit(function () {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function () {
                $('.thx-message').fadeIn();
                setTimeout(function () {
                    $('.thx-message').fadeOut();
                    $('.form-popup').fadeOut();
                    $('.black-wrapper').fadeOut();
                }, 3000)
            });
            return false;
        });
    })

});
