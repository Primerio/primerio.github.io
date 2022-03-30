    /********************************************************/
    var input5 = document.querySelector("#phone5");
    var iti = window.intlTelInput(input5, {
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

    input5.addEventListener('change', handleChange);
    input5.addEventListener('keyup', handleChange);
    /****************************************************/
    
      /********************************************************/
    var input6 = document.querySelector("#phone6");
    var iti = window.intlTelInput(input6, {
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

    input6.addEventListener('change', handleChange);
    input6.addEventListener('keyup', handleChange);
    /****************************************************/
  $('.open-form').click(function () {
            $('.popup-form').fadeIn();
            $('.black-bg').fadeIn();
        })
        $('.close-popup-form, .black-bg').click(function () {
             $('.popup-form').fadeOut();
            $('.black-bg').fadeOut();
        })