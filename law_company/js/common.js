$(document).ready(function () {
    //поп ап
    $(".call_popup").click(function () {
        $(".popup_form").fadeIn(600).addClass("open_popup");

    });
    $(".close_popup").click(function () {
        $(".popup_form").removeClass("open_popup");
    });
    //моб меню
    $(".mobile_menu_btn").click(function () {
        $(this).next().slideToggle();
    });
    //топ слайдер
    $('.top_slider').slick({
        dots: true
    });
    //збільшення фото
    $(".image").click(function () {
        var img = $(this);
        var src = img.attr('src');
        $("body").append("<div class='popup'>" +
            "<div class='popup_bg'></div>" +
            "<img src='" + src + "' class='popup_img' />" +
            "</div>");

        $(".popup").fadeIn(800);
        $(".popup_bg").click(function () {
            $(".popup").fadeOut(800);
            setTimeout(function () {
                $(".popup").remove();
            }, 800);
        });
    });

    //слайдер з товарами
    $('.offers_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]

    });

    //кнопка вверх
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


    //прокрутка

    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});
