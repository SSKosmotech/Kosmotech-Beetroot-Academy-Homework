"use strict";function _defineProperty(o,n,e){return n in o?Object.defineProperty(o,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[n]=e,o}$(function(){var o;$("#main_slider").slick({infinite:!0,vertical:!0,swipe:!0,verticalSwiping:!0,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:890,settings:{dots:!1}},{breakpoint:500,settings:{swipe:!1,dots:!1}}]}),$.get("data/news.json",function(o){var n;console.log(o),n="",o.forEach(function(o){n+='\n        <div class="news_slider_content"> \n            <div class="pic">\n                <img src="'.concat(o.image,'" alt="').concat(o.title,'">                         \n            </div>\n            <div class="wrap_wht_bckg">\n                <h3>\n                    ').concat(o.title,"\n                </h3>\n                <p>\n                    ").concat(o.text,'\n                </p>\n                <div class="wrap_author">\n                    <div class="pic">\n                        <img src="').concat(o.author.avatar,'" alt="').concat(o.author.name,'">\n                    </div>\n                    <div class="wrap_info_news">\n                        <p>').concat(o.author.name,"</p>\n                        <p>").concat(o.date,"</p>\n                    </div>\n                </div>\n            </div>\n      \n        </div>\n            ")}),$("#news_slider").html(n),$("#news_slider").slick({slidesToShow:3,infinite:!0,slidesToScroll:1,autoplay:!1,autoplaySpeed:4e3,dots:!0,lazyLoad:"ondemand",responsive:[{breakpoint:1300,settings:{slidesToShow:2,arrows:!1,slidesToScroll:2}},{breakpoint:955,settings:{slidesToShow:1,arrows:!0,slidesToScroll:1}},{breakpoint:685,settings:{slidesToShow:1,arrows:!1,slidesToScroll:1,dots:!1}}]})}),lightGallery(document.getElementById("lightgallery"),(_defineProperty(o={plugins:[lgZoom,lgThumbnail],thumbnail:!0,speed:500,controls:!0,zoom:!0,actualSize:!0,animateThumb:!1,zoomFromOrigin:!0},"actualSize",!0),_defineProperty(o,"mobileSettings",{controls:!1,showCloseIcon:!1,download:!1}),o)),$("#load_map_link").on("click",function(o){o.preventDefault(),o.stopPropagation(),$("#map",""),function(){var o=L.map("map").setView([40.67831799088298,-73.89777067307712],18);L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(o);var n=L.icon({iconUrl:"assets/images/pin.png",iconSize:[106,106],iconAnchor:[106,106],popupAnchor:[-53,-90]});L.marker([40.67831799088298,-73.89777067307712],{icon:n}).addTo(o).bindPopup('\n        <div class="popup">\n            <span>Serhii Simonov can be there</span>\n            <img class="popup_img" src="assets/images/kosmo_planet.png">\n        </div>\n        ')}()}),$(".mobile_menu a, .main_menu a, .first_screen a.bottom_arrow").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},800)}),$(window).on("scroll",function(){135<$(window).scrollTop()?$(".wrap_menu").addClass("scroll"):$(".wrap_menu").removeClass("scroll")}),$(".hamburger, #page_overlay, .mobile_menu a").on("click",function(){$(".hamburger").toggleClass("is-active"),$("#side_block, #page_overlay").toggleClass("open"),$("body").toggleClass("lock")})});