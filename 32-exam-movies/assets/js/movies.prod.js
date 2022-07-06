"use strict";function ownKeys(t,e){var o,i=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,o)),i}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(o,!0).forEach(function(e){_defineProperty(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var my_theme_cookie=getCookie("ThemeName");"dark_theme"===my_theme_cookie&&(document.body.classList.add("dark_theme"),document.getElementById("check_theme").setAttribute("checked","checked"));var Pagination={props:{page:{type:Number,default:1,required:!0},total:{type:Number,default:0,required:!0},showpaginationprevbutton:{type:Boolean,default:!0,required:!0},showpaginationnextbutton:{type:Boolean,default:!0,required:!0},ifdisabledprevbutton:{type:Boolean,default:!1,required:!0},ifdisablednextbutton:{type:Boolean,default:!1,required:!0},ifdisabledprev:{type:Boolean,default:!1,required:!0},ifdisablednext:{type:Boolean,default:!1,required:!0}},methods:{goToPage2:function(e){this.$emit("toPage",e)}},template:"#pagination"},movieItem={props:["movie"],methods:{getMovieInfo:function(e){this.$emit("getMovie",e)},setFavorites:function(e){this.$emit("setFavorit",e)}},template:"#movieItem"},App={data:function(){return{API_KEY:"d7be29bf",search:"Batman",selectedType:"",year:"",movieList:[],movieInfo:[],showModal:!1,myFavorite:[],showFavoritesModal:!1,showAboutAddedModal:!1,showAboutDeletedModal:!1,totalPages:0,page:1,perPage:10,ifDisabledPrevButton:!1,ifDisabledNextButton:!1,ifDisabledPrev:!1,ifDisabledNext:!1,isActiveTheme:!1,showPaginationNextButton:!0,showPaginationPrevButton:!0}},components:{movieItem:movieItem,Pagination:Pagination},methods:{searchMovies:function(){var t=this;""!==this.search&&("all"===this.selectedType&&(this.selectedType=""),console.log(this.selectedType),axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY,"&s=").concat(this.search,"&type=").concat(this.selectedType,"&page=").concat(this.page,"&y=").concat(this.year)).then(function(e){t.movieList=e.data.Search,t.totalPages=Math.ceil(e.data.totalResults/10),console.log("this.totalPages: ".concat(t.totalPages)),t.page>=t.totalPages?t.ifDisabledNext=!0:t.ifDisabledNext=!1,1===t.page?t.ifDisabledPrev=!0:t.ifDisabledPrev=!1,t.page>=t.totalPages-5?(t.ifDisabledNextButton=!0,t.showPaginationNextButton=!1):t.showPaginationNextButton=!0,t.page<=6?(t.ifDisabledPrevButton=!0,t.showPaginationPrevButton=!1):t.showPaginationPrevButton=!0,console.log(e)}).catch(function(e){console.log(e)}).then(function(){}),console.log("this.page: ".concat(this.page)),console.log("this.totalPages: ".concat(this.totalPages)))},showMovieInfo:function(){this.showModal=!0},getMovieInfo:function(e){var t=this;axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY,"&i=").concat(e)).then(function(e){for(t.movieInfo=e.data,t.showMovieInfo(),console.log(e),console.log(t.movieInfo),i=0;i<3;i++)0===i?t.movieInfo.Ratings[i].Value=100-10*parseFloat("".concat(t.movieInfo.Ratings[i].Value)):t.movieInfo.Ratings[i].Value=100-parseFloat("".concat(t.movieInfo.Ratings[i].Value))}).catch(function(e){console.log(e)}).then(function(){})},setFavorites:function(t){console.log(t);var e=this.movieList.find(function(e){return e.imdbID===t}),o=this.myFavorite.findIndex(function(e){return e.imdbID===t});-1===o?(this.myFavorite.push(e),this.showAboutAdded()):(this.myFavorite.splice(o,1),this.showAboutDeleted()),localStorage.setItem("myFavorite",JSON.stringify(this.myFavorite)),console.log(this.myFavorite)},showFavorites:function(){this.showFavoritesModal=!0,console.log("Check: ".concat(this.myFavorite))},showAboutAdded:function(){this.showAboutAddedModal=!0},showAboutDeleted:function(){this.showAboutDeletedModal=!0},goToPage:function(e){this.page=e,console.log("pageNum: ".concat(e)),1!==e&&(this.ifDisabledPrev=!0),e<=6?(this.ifDisabledPrevButton=!0,this.showPaginationPrevButton=!1):(this.ifDisabledPrevButton=!1,this.showPaginationPrevButton=!0),e!==this.totalPages&&(this.ifDisabledNext=!0),e>=this.totalPages-5?(this.ifDisabledNextButton=!0,this.showPaginationNextButton=!1):(this.ifDisabledNextButton=!1,this.showPaginationNextButton=!0),this.searchMovies()}},computed:{movieListWithFavorite:function(){var o=this,i=[];return this.movieList.forEach(function(t){var e=o.myFavorite.find(function(e){return t.imdbID===e.imdbID});t.inFav=void 0!==e,i.push(t)}),console.log(i),i}},created:function(){this.myFavorite=JSON.parse(localStorage.getItem("myFavorite"))||[]}};Vue.createApp(App).mount("#app");var checkbox=document.getElementById("check_theme");function getCookie(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function setCookie(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};(o=_objectSpread({path:"/"},o)).expires instanceof Date&&(o.expires=o.expires.toUTCString());var i=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var n in o){i+="; "+n;var a=o[n];!0!==a&&(i+="="+a)}document.cookie=i}function deleteCookie(e){setCookie(e,"",{"max-age":-1})}checkbox.addEventListener("change",function(){this.checked?(console.log("Checkbox is checked.."),document.body.classList.toggle("dark_theme"),setCookie("ThemeName","dark_theme")):(document.body.classList.toggle("dark_theme"),deleteCookie("ThemeName"))});