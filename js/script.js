(function ($) {

    $(document).ready(function () {


        $('.nav a').on("click", function () {
            $('a').addClass('active');
        });


        $('.click-hide').on("click", function () {
            $('.hide').css("display", "none");
        });


        $(".lp-slider1").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 7500

        });
    });
})(jQuery)
