$(function(){

    //ініціалізація анімацій
    new WOW().init();

    // ініціалізація головного (вертикального) слайдера
    $('#main_slider').slick({
        infinite: true,
        vertical: true,
        swipe: true,
        verticalSwiping: true,
        // adaptiveHeight: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 890,
              settings: {
                dots: false,
              }
            },
            {
                breakpoint: 500,
                settings: {
                    swipe: false,
                    dots: false,
                }
              }
        ]
    });

    // забір новин з json та запуск функції побудови dom і вставка новин в слайдер
    $.get('data/news.json', (resp)=>{
        console.log(resp);
        buildNewsHtml(resp);
        $('#news_slider').slick({
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            dots: true,
            lazyLoad: 'ondemand',
            responsive:[       
                            {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 2,
                                arrows: false,
                                slidesToScroll: 2,
                                }
                            },       
                            {
                                breakpoint: 955,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: true,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 685,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: false,
                                    slidesToScroll: 1,
                                    dots: true,
                                }
                            }
                    ]
        });

    });


    //функція побудови dom для news
    function buildNewsHtml(cart){
        let news_html = ''
        cart.forEach(element => {
            news_html += `
        <div class="news_slider_content"> 
            <div class="pic">
                <img src="${element.image}" alt="${element.title}">                         
            </div>
            <div class="wrap_wht_bckg">
                <h3>
                    ${element.title}
                </h3>
                <p>
                    ${element.text}
                </p>
                <div class="wrap_author">
                    <div class="pic">
                        <img src="${element.author.avatar}" alt="${element.author.name}">
                    </div>
                    <div class="wrap_info_news">
                        <p>${element.author.name}</p>
                        <p>${element.date}</p>
                    </div>
                </div>
            </div>
      
        </div>
            `
        });
        $('#news_slider').html(news_html);
    };

    
    //ініціалізація lightGallery
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        thumbnail: true,
        speed: 500,
        controls: true,
        zoom: true,
        actualSize: true,
        animateThumb: false,
        zoomFromOrigin: true,
        actualSize: true,
        mobileSettings: {
            controls: true,
            showCloseIcon: false,
            download: false,
          }
    });


    // клік по фото карти, який активує саму карту
    // document.getElementById('load_map_link').addEventListener('click', function(event){
    $("#load_map_link").on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        // document.getElementById('map').innerHTML = '';
        $("#map", '');
        initMap();
    });


    // функція побудови карти
    function initMap(){
        let map = L.map('map').setView([40.67831799088298, -73.89777067307712], 18);

        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


        //створюю кастомний маркер   
        let pinIcon = L.icon({
            iconUrl: 'assets/images/pin.png',
            iconSize: [106, 106],
            iconAnchor: [106, 106],
            popupAnchor: [-53, -90],

        });


        // будую dom для виводу кастомного маркеру (і popup) на карту
        L.marker([40.67831799088298, -73.89777067307712], {icon: pinIcon}).addTo(map)
        .bindPopup(`
        <div class="popup">
            <span>Serhii Simonov can be there</span>
            <img class="popup_img" src="assets/images/kosmo_planet.png">
        </div>
        `);
        // .openPopup();
    };

    //плавний скрол до секції, при клікі на мобільні і головні пункти меню і стрілка на first_screen 
      $('.mobile_menu a, .main_menu a, .first_screen .first_screen_arrow').on('click', function(e){
        e.preventDefault(); //заборонили браузеру проскролити до id
      $('html, body').animate({
        scrollTop:$($(this).attr('href')).offset().top
        }, 800)
    });

    //активація "скляного" горизонтального меню
    $(window).on('scroll', ()=>{
        if($(window).scrollTop()>135) {
            $(".wrap_menu").addClass("scroll")
        }else{
            $(".wrap_menu").removeClass("scroll")
        }
    })
    
    // функція для активація і дезактивація hamburger меню по клікам на: гамбургер, оверлей, мобільні пункти меню
    function toggleMenu (){
        $('.hamburger').toggleClass('is-active');
                $('#side_block, #page_overlay').toggleClass('open');
                $('body').toggleClass('lock');
        }

    // запуск функції активація і дезактивація hamburger меню (при кліці по таким класам):
        $('.hamburger, #page_overlay, .mobile_menu a').on('click', function(){
            toggleMenu ();
        })

  
})


