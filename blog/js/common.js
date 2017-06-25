/* Preloader */ 
$(window).load(function() {
    $(".loader").delay(100).fadeOut().remove();    

});

$(document).ready(function () {

    $(document).ready(function () {
        $("#my-menu").mmenu({
            "extensions": [
            "theme-dark",
             "pagedim-black"
         ]
        });
        var API = $("#my-menu").data("mmenu");

        $("#my-button").click(function () {
            API.open();
        });
    });


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

    /*botton to top end*/


   
 


    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carusel-slider");
    owl.owlCarousel({
        singleItem: true
    });
    owl.on(".owl-wrapper", function (e) {
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

    // sidebar slider begin
    var owl = $(".sidebar-slider");
    owl.owlCarousel({
        singleItem: true,
        autoPlay: true
    });
    owl.on(".owl-wrapper", function (e) {
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
    // sidebar slider end
    
    // recomended post slider begin
    var owl = $(".rp-slider");
    owl.owlCarousel({
        items : 3,
        temsCustom : true,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [760, 2],
        itemsTabletSmall : false,
        itemsMobile : [620, 1],
        autoPlay: true
    });
    owl.on(".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_but").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_but").click(function () {
        owl.trigger("owl.prev");
    });
    // recomended post slider end

});