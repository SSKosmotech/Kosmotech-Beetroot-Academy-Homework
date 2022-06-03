$(function(){
   $('.main_slider').slick({
        infinite: true,
        dots: true,
        lazyLoad: 'progressive',
    });


    $('.product_slider').slick({
        // slidesToShow: 5,
        // centerMode: true,
        // infinite: true,
        // slidesToScroll: 5,

        // slidesPerRow: 5,
        // centerPadding: '10px'
        // centerPadding: '50px',
        // customPaging: '10px',
        // lazyLoad: 'progressive',

        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true
    });

})