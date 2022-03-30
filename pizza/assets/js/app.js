$(document).ready(function () {
    $('.price-cunter input').on('input change paste', function () {
        $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
    });

    $('.price-cunter button').on('click', function () {
        var input = $(this).closest('.price-cunter').find('input'); // инпут
        var value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('nc-minus')) {
            value = value - 1; // вычитаем из value 1
            if (value < 1) {
                value = 1;
            }
        }
        if ($(this).hasClass('nc-plus')) {
            value = value + 1; // прибавляем к value 1
        }

        input.attr('value', value); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
    });
    /**********************************************************/
    $('.cart-popup__item-head__delete button').click(function () {
        $(this).closest('.cart-popup__item').remove();
    })
    /**********************************************************/
    $('.main-header__cart-wrapper').click(function () {
        $('.cart-popup').toggleClass('cart-popup__open');
    })
    /**********************************************************/
    $('.mob-cart-btn').click(function () {
        $('.cart-popup').toggleClass('open-cart-popup__mob');
    })
    /**********************************************************/
    $('.close-popup-cart').click(function () {
        $('.cart-popup').removeClass('cart-popup__open open-cart-popup__mob');
    })
    /**********************************************************/
    $('.open-mob-menu__btn').click(function () {
        $('.main-mob-menu').addClass('main-mob-menu__open');
    })
    $('.main-mob-menu__close-btn').click(function () {
        $('.main-mob-menu').removeClass('main-mob-menu__open');
    })
    /**********************************************************/
    $('.add-review-popup__smile-row-img').click(function () {
        $('.add-review-popup__smile-row-img').removeClass('add-review-popup__smile-row-img__active');
        $(this).addClass('add-review-popup__smile-row-img__active');
        $('.add-review-popup__grade-text').text($(this).data('text'));
        $('.add-review-popup__grade').fadeIn();
        $('.add-review-popup__title h2').text($(this).data('title'));
        $('.add-review-popup__form').fadeIn();
    })

    $('.add-reviews').click(function () {
        $('.black-wrapper__review').addClass('black-wrapper__review-active');
    })
    $('.add-review-popup__close').click(function () {
        $('.black-wrapper__review').removeClass('black-wrapper__review-active');
    })
    /**********************************************************/
    $('.account-page__user-info__name-change').click(function () {
        $('.current-user-name__wrapper').hide();
        $('.change-user-name-form').addClass('change-user-name-form-active');
    })
    /**********************************************************/
    //    function writeCookie(name, val, expires) {
    //        var date = new Date;
    //        date.setDate(date.getDate() + expires);
    //        document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
    //    }
    //
    //    function readCookie(name) {
    //        var matches = document.cookie.match(new RegExp(
    //            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    //        ));
    //        return matches ? decodeURIComponent(matches[1]) : undefined;
    //    }
    var cart = {
        total: 0,
        count: 0,
        items: []
    }

    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    $('.add-to-cart').click(function () {
        var cartCookie = JSON.parse(localStorage.getItem('cart'));
        var itemId = $(this).data('id');
        console.log(cartCookie.items)
        //        console.log(cartCookie.items)
        //        console.log({
        //            title: $(this).data('title'),
        //            id: $(this).data('id'),
        //            price: $(this).data('price'),
        //            c: 1
        //        })


        console.log(filterItems(itemId));

        cartCookie.items.push({
            title: $(this).data('title'),
            id: itemId,
            price: $(this).data('price'),
            c: 1
        });

        localStorage.setItem('cart', JSON.stringify(cartCookie));
    })
    /**********************************************************/

    $('.home-slider__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
    /**********************************************************/
    $('.faq-item__title').click(function () {
        $(this).next().slideToggle();
    })
    /**********************************************************/
    $('.job-page__item-open-popup-wrapper').click(function () {
        $(this).next().addClass('job-page__item-popup-wrapper__active')
    })
    $('.job-page__item-popup__close').click(function () {
        $('.job-page__item-popup-wrapper').removeClass('job-page__item-popup-wrapper__active');
    })
    /**********************************************************/
    $('.job-page__item-applay__btn').click(function () {
        $('.job-item-form__hidden').val($(this).data('title'));
        $('.job-item-form-wrapper').addClass('job-item-form-wrapper__active')
    })
    
    $('.job-item-form__close').click(function () {
       $('.job-item-form-wrapper').removeClass('job-item-form-wrapper__active')
    })
    /**********************************************************/
    $('.cart-page__pay-item__btn ').click(function () {
        $('.cart-page__pay-item__btn ').removeClass('cart-page__pay-item__btn-active');
        $(this).addClass('cart-page__pay-item__btn-active');
        $('.pay-type').val($(this).data('type'));
    })
    /**********************************************************/
    /**********************************************************/
    /**********************************************************/
    /**********************************************************/
    /**********************************************************/
    /**********************************************************/
    /**********************************************************/
})
