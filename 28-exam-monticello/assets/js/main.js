$(function(){
    $('#main_slider').slick({
        infinite: true,
        vertical: true,
        swipe: true,
        verticalSwiping: true,
        // adaptiveHeight: true,
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         infinite: true,
        //         dots: true,
        //         arrows: false,
        //         autoplay: true,
        //         autoplaySpeed: 3000,
        //         slidesToScroll: 1,
        //         adaptiveHeight: true,
        //       }
        //     },
        //     {
        //       breakpoint: 320,
        //       settings: {
        //         slidesToShow: 1,
        //         infinite: true,
        //         dots: true,
        //         arrows: false,
        //         autoplay: true,
        //         autoplaySpeed: 3000,
        //         slidesToScroll: 1,
        //         adaptiveHeight: true,
        //       }
        //     }
        // ]
    });


    $.get('data/news.json', (resp)=>{
        console.log(resp);
        buildNewsHtml(resp);
        $('#news_slider').slick({
            slidesToShow: 3,
            // centerMode: true,
            infinite: true,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            // responsive: [
            //     {
            //         breakpoint: 1100,
            //         settings: {
            //           slidesToShow: 4,
            //           infinite: true,
            //           dots: false,
            //           arrows: true,
            //           autoplay: true,
            //           autoplaySpeed: 3000,
            //           slidesToScroll: 4,
            //           lazyLoad: 'ondemand',
            //         }
            //     },
            //     {
            //       breakpoint: 850,
            //       settings: {
            //         slidesToShow: 3,
            //         infinite: true,
            //         dots: false,
            //         arrows: true,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //         slidesToScroll: 3,
            //         lazyLoad: 'ondemand',
            //       }
            //     },
            //     {
            //       breakpoint: 750,
            //       settings: {
            //         slidesToShow: 2,
            //         infinite: true,
            //         dots: true,
            //         arrows: false,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //         slidesToScroll: 2,
            //         lazyLoad: 'ondemand',
            //         // centerMode: true,
            //       }
            //     },
            //     {
            //       breakpoint: 401,
            //       settings: {
            //         slidesToShow: 1,
            //         infinite: true,
            //         dots: true,
            //         arrows: false,
            //         autoplay: true,
            //         autoplaySpeed: 3000,
            //         slidesToScroll: 1,
            //         lazyLoad: 'ondemand',
            //       }
            //     }
            // ]
        });

    });

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
    }


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
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false
          }
    });



    document.getElementById('load_map_link').addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        document.getElementById('map').innerHTML = '';
        initMap();
    })

    function initMap(){
        let map = L.map('map').setView([40.67831799088298, -73.89777067307712], 17);

        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

        L.marker([40.67831799088298, -73.89777067307712]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        // .openPopup();
    }


        

})


