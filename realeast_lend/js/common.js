$(document).ready(function () {

    var input = document.querySelector("#phone1");
    var iti = window.intlTelInput(input, {
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js',
        initialCountry: "auto",
        separateDialCode: true,
        dropdownContainer: null,
        geoIpLookup: function (callback) {
            $.get({
                url: "https://ipinfo.io",
                cache: true
            }, function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                this.country += resp.country;
                callback(countryCode);
            });
        }
    });

    var handleChange = function () {

        console.log(iti.getNumber());
    }

    input.addEventListener('change', handleChange);
    input.addEventListener('keyup', handleChange);
    /********************************************************/
    var input2 = document.querySelector("#phone2");
    var iti = window.intlTelInput(input2, {
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js',
        initialCountry: "auto",
        separateDialCode: true,
        dropdownContainer: null,
        geoIpLookup: function (callback) {
            $.get({
                url: "https://ipinfo.io",
                cache: true
            }, function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                this.country += resp.country;
                callback(countryCode);
            });
        }
    });

    var handleChange = function () {

        console.log(iti.getNumber());
    }

    input2.addEventListener('change', handleChange);
    input2.addEventListener('keyup', handleChange);

    /********************************************************/
    var input3 = document.querySelector("#phone3");
    var iti = window.intlTelInput(input3, {
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js',
        initialCountry: "auto",
        separateDialCode: true,
        dropdownContainer: null,
        geoIpLookup: function (callback) {
            $.get({
                url: "https://ipinfo.io",
                cache: true
            }, function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                this.country += resp.country;
                callback(countryCode);
            });
        }
    });

    var handleChange = function () {

        console.log(iti.getNumber());
    }

    input3.addEventListener('change', handleChange);
    input3.addEventListener('keyup', handleChange);
    /****************************************************/
    
     /********************************************************/
    var input4 = document.querySelector("#phone4");
    var iti = window.intlTelInput(input4, {
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js',
        initialCountry: "auto",
        separateDialCode: true,
        dropdownContainer: null,
        geoIpLookup: function (callback) {
            $.get({
                url: "https://ipinfo.io",
                cache: true
            }, function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                this.country += resp.country;
                callback(countryCode);
            });
        }
    });

    var handleChange = function () {

        console.log(iti.getNumber());
    }

    input4.addEventListener('change', handleChange);
    input4.addEventListener('keyup', handleChange);
    /****************************************************/
      /********************************************************/
  
    /****************************************************/

    $('.mob-menu-btn').click(function () {
        $('.mob-menu-wrapper').addClass('open-mob-menu');
    });
    $('.close-mob-menu, .header-menu_wrapper li a').click(function () {
        $('.mob-menu-wrapper').removeClass('open-mob-menu');
    });
    /******************************************************/
        $('.open-form').click(function () {
            $('.popup-form').fadeIn();
            $('.black-bg').fadeIn();
        })
        $('.close-popup-form, .black-bg').click(function () {
             $('.popup-form').fadeOut();
            $('.black-bg').fadeOut();
        })
    /******************************************************/
        $('.popup-get-info_bottom, .popup-get-info_top').click(function () {
            $('.item-popup').fadeOut();
            $('.popup-form').fadeIn();
        })
    /******************************************************/
    $('.slick-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-bottom',
        
    });
    $('.slick-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-top',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
          arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
          
      }
    }
  ]
    });
    
    /******************************************/
    $('.close-popup, .close-popup-bottom, .black-bg').click( function () {
        $('.item-popup').fadeOut();
        $('.black-bg').fadeOut();
        
    })
    /******************************************/
    $('.item-1').click(function () {
        $('.popup-1').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-1 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
      /******************************************/
    $('.item-2').click(function () {
        $('.popup-2').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-2 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
     /******************************************/
    $('.item-3').click(function () {
        $('.popup-3').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-3 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
     /******************************************/
    $('.item-4').click(function () {
        $('.popup-4').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-4 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-5').click(function () {
        $('.popup-5').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-5 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-6').click(function () {
        $('.popup-6').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-6 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-7').click(function () {
        $('.popup-7').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-7 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-8').click(function () {
        $('.popup-8').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-8 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-9').click(function () {
        $('.popup-9').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-9 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-10').click(function () {
        $('.popup-10').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-10 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-11').click(function () {
        $('.popup-11').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-11 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })
    /******************************************/
    $('.item-12').click(function () {
        $('.popup-12').fadeIn();
        $('.black-bg').fadeIn();
        $('.slick-next').click();
        var itemName = $('.item-12 .form-item-name').text()
        $('.hidden-name').val(itemName);
    })





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
    /**********************************/


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

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});
