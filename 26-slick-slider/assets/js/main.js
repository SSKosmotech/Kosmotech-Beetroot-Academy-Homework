$(function(){
   $('.main_slider').slick({
        infinite: true,
        dots: true,
        lazyLoad: 'progressive',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.product_slider').slick({
        slidesToShow: 5,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        // slidesPerRow: 5,
        // centerPadding: '10px'
        // centerPadding: '50px',
        // customPaging: '10px',
        // lazyLoad: 'progressive',

        // slidesToShow: 5,
        // slidesToScroll: 1,
        // centerMode: true,
        // arrows: true,
        // dots: false,
        // speed: 300,
        // centerPadding: '20px',
        // infinite: true,
        // autoplaySpeed: 5000,
    });

    $('.partners_slider').slick({
        slidesToShow: 9,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        // slidesPerRow: 5,
        centerPadding: '150px'
        // autoplay: true,
        // autoplaySpeed: 5000,
    })

})