$(function(){
   $('.main_slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
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
              }
            },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 2
            //   }
            // },
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
              }
            }
        ]
    });


    $('.product_slider').slick({
        slidesToShow: 5,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        // autoplay: true,
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
                  slidesToScroll: 1,
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
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
                // centerMode: true,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1,
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
        // autoplay: true,
        autoplaySpeed: 5000,
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
                slidesToScroll: 1,
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
                slidesToScroll: 1,
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
                slidesToScroll: 1,
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
                slidesToScroll: 1,
              }
            }
        ]
    })

})