$(document).ready(function () {

    $('.payment-systems.slick').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: $('.button[data-slider="prev"]'),
        nextArrow: $('.button[data-slider="next"]'),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
                },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
                },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
                }
            ]

    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    $('#mainForm').submit(function (e) {
        e.preventDefault();
        $('#mainForm input').each(function (index, item) {
            var error = $(item).parent().find('.error-message');
            $(item).change(function () {
                error.removeClass('error');
                $(error).fadeOut(100);
            })
            if ($(item).attr('name') === 'email' && !validateEmail($(item).val())) {
                $(error).html('Incorrect Email')
            }
            if ($(item).val() == '') {
                $(error).fadeIn(100);
                $(item).addClass('error');
            } else {
                $(error).fadeOut(100);
                $(item).removeClass('error');
                $('#popup').fadeIn('fast');
            }
        });
    });

    $("#applyBtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".form-wrapper").offset().top + -120
        }, 2000);
    });
});