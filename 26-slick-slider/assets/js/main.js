$(function(){
   $('.main_slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                adaptiveHeight: true,
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                adaptiveHeight: true,
              }
            }
        ]
    });


    $('.product_slider').slick({
        slidesToShow: 5,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 4,
                  infinite: true,
                  dots: false,
                  arrows: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  slidesToScroll: 4,
                  lazyLoad: 'ondemand',
                }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 3,
                infinite: true,
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 3,
                lazyLoad: 'ondemand',
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 2,
                lazyLoad: 'ondemand',
                // centerMode: true,
              }
            },
            {
              breakpoint: 401,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                lazyLoad: 'ondemand',
              }
            }
        ]
    });

    $('.partners_slider').slick({
        slidesToShow: 9,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        // slidesPerRow: 5,
        centerPadding: '150px',
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand',
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 6,
                infinite: true,
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 6,
                lazyLoad: 'ondemand',
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 4,
                lazyLoad: 'ondemand',
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 3,
                lazyLoad: 'ondemand',
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 2,
                lazyLoad: 'ondemand',
              }
            }
        ]
    })

})