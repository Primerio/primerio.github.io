$(document).ready(function () {

    $.fancybox.defaults.fullScreen = {
        autoStart: true
    };
    /****************************************/

   $('select').styler();

    /**************************/
    $('.item_bottom button').click(function () {
        $(this).parent().find('.item_contacts').fadeIn();
    })

    $('.close_item_contact').click(function () {
        $('.item_contacts').fadeOut();
    })

    /*****************************************/
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
    });
    $('.menu-burger__header').click(function () {
        $('.mobile_menu').addClass('open_mobile_menu');
        $('.mobile_get_call').addClass('open_mobile_get_call');
    })
    $('.close_mob_menu').click(function () {
        $('.mobile_menu').removeClass('open_mobile_menu');
        $('.menu-burger__header').removeClass('open-menu');
        $('.mobile_get_call').removeClass('open_mobile_get_call');
    })
    /**********************************************/
    $('.open_all_filters').click(function () {
        $('.additional_filters_wrapper').slideToggle();
    })
    /**********************************************/
    $('.open_main_popup').click(function () {
        $('.main_popup').fadeIn();
        $('.black_page_wrapper').fadeIn();
    })
    $('.mobile_open_main_popup').click(function () {
        $('.main_popup').fadeIn();
        $('.black_page_wrapper').fadeIn();
        $('.mobile_menu').removeClass('open_mobile_menu');
        $('.menu-burger__header').toggleClass('open-menu');
    })
    /**********************************************/
    $('.close_main_popup, .black_page_wrapper').click(function () {
        $('.main_popup').fadeOut();
        $('.black_page_wrapper').fadeOut();
    })
    /**********************************************/
    $('.item_single_slidet_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.item_single_slider_bottom'
    });
    $('.item_single_slider_bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.item_single_slidet_top',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    /**********************************************/
    $('.items_slider').slick({
        prevArrow: $('.slick_prev'),
        nextArrow: $('.slick_next'),
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 572,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
  ]
    });
    
        /**********************************************/
    $('.recommended_single_item_slider').slick({
        prevArrow: $('.slick_prev'), 
        nextArrow: $('.slick_next'),
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 572,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
  ]
    });
/******************************************************/
    var tabLink = $('.tabs__nav a');
    var $tabs = function (target) {
        var
            _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
            _eventTabsShow,
            _showTab = function (tabsLinkTarget) {
                var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
                tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
                tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
                tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
                // если следующая вкладка равна активной, то завершаем работу
                if (tabsLinkTarget === tabsLinkActive) {
                    return;
                }
                // удаляем классы у текущих активных элементов
                if (tabsLinkActive !== null) {
                    tabsLinkActive.classList.remove('tabs__link_active');
                }
                if (tabsPaneShow !== null) {
                    tabsPaneShow.classList.remove('tabs__pane_show');
                }
                // добавляем классы к элементам (в завимости от выбранной вкладки)
                tabsLinkTarget.classList.add('tabs__link_active');
                tabsPaneTarget.classList.add('tabs__pane_show');
                document.dispatchEvent(_eventTabsShow);
            },
            _switchTabTo = function (tabsLinkIndex) {
                var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
                if (tabsLinks.length > 0) {
                    if (tabsLinkIndex > tabsLinks.length) {
                        tabsLinkIndex = tabsLinks.length;
                    } else if (tabsLinkIndex < 1) {
                        tabsLinkIndex = 1;
                    }
                    _showTab(tabsLinks[tabsLinkIndex - 1]);
                }
            };

        _eventTabsShow = new CustomEvent('tab.show', {
            detail: _elemTabs
        });

        _elemTabs.addEventListener('click', function (e) {
            var tabsLinkTarget = e.target;
            // завершаем выполнение функции, если кликнули не по ссылке
            if (!tabsLinkTarget.classList.contains('tabs__link')) {
                /* tabsLinkTarget = tabsLinkTarget.parentElement;*/
                return;
            }
            // отменяем стандартное действие
            e.preventDefault();
            _showTab(tabsLinkTarget);
        });

        return {
            showTab: function (target) {
                _showTab(target);
            },
            switchTabTo: function (index) {
                _switchTabTo(index);
            }
        }

    };

    $tabs('.tabs');









    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({
        until: austDay,
        format: 'yowdHMS'
    });

    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();

    //Навигация по Landing Page
    //$(".top_mnu") - это верхняя панель со ссылками.
    //Ссылки вида <a href="#contacts">Контакты</a>
    $(".top_mnu").navigation();

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function (direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        };
    }, {
        offset: 100
    });

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function () {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 4
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
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
