//Check dark_theme cookie
const my_theme_cookie = getCookie('ThemeName')
console.log(my_theme_cookie);

if(my_theme_cookie === 'dark_theme'){
    document.body.classList.add('dark_theme');
    document.getElementById('check_theme').setAttribute('checked', 'checked');
}

const Pagination2 = {
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        },
    },
    methods: {
        goToPage2(new_page) {
            this.$emit('toPage', new_page)
        }
    },
    // computed: {
    //     from(){
    //         return from
    //     },
    //     to() {

    //     }      
    // },
    template: '#pagination2'
}



const movieItem = {
    props: ["movie"],

    methods: {
        getMovieInfo(id) {
            // this.$parent.getMovieInfo(id)
            this.$emit("getMovie", id)
        },
        setFavorites(id) {
            // this.$parent.setFavorites(id, title)
            this.$emit("setFavorit", id)
        }
    },
    
    template: "#movieItem"
}

const App = {
    data(){
        return {
            API_KEY: 'd7be29bf',
            search: "Batman",
            selectedType: "",
            year: "",
            movieList: [],
            movieInfo: [],
            showModal: false,
            myFavorite: [],
            showFavoritesModal: false,
            showAboutAddedModal: false,
            showAboutDeletedModal: false,
            totalPages: 0,
            page: 1,
            perPage: 10,
            ifDisabledPrevButton: false,
            ifDisabledNextButton: false,
            ifDisabledPrev: false,
            ifDisabledNext: false,
            isActiveTheme: false,
            showPagination: false,
            showPaginationNextButton: true,
            showPaginationPrevButton: true
        }
    },
    components: {
        movieItem,
        Pagination2
    },
    methods: {
        searchMovies() {
            if(this.search !== ''){
                if(this.selectedType === 'all'){
                    this.selectedType = ''
                }
                console.log(this.selectedType);
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.selectedType}&page=${this.page}&y=${this.year}`)
                .then(response => {
                    // handle success
                    this.movieList = response.data.Search
                    this.totalPages = Math.ceil(response.data.totalResults / 10)
                    console.log(`this.totalPages: ${this.totalPages}`);
                    if(this.page >= this.totalPages){
                        this.ifDisabledNext = true
                    }else{
                        this.ifDisabledNext = false
                    }
                    if(this.page === 1){
                        this.ifDisabledPrev = true
                    }else{
                        this.ifDisabledPrev = false
                    }

                if(this.page >= (this.totalPages-5)){
                    this.ifDisabledNextButton = true
                    this.showPaginationNextButton = false
                }else{
                    this.showPaginationNextButton = true
                }

                if(this.page <= 5){
                    this.ifDisabledPrevButton = true
                    this.showPaginationPrevButton = false
                }else{
                    this.showPaginationPrevButton = true
                }
                
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
                // this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
                console.log(`this.page: ${this.page}`);
                console.log(`this.totalPages: ${this.totalPages}`);
                
                this.showPagination = true
            }

            
        },
        showMovieInfo(){
            // showMovieInfo(id){
                // console.log(id);
            this.showModal = true

        },
        getMovieInfo(id){
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
                // handle success
                this.movieInfo = response.data

                this.showMovieInfo();
                console.log(response);
                console.log(this.movieInfo);
                
                for(i=0; i<3; i++){
                    if(i === 0){
                        this.movieInfo.Ratings[i].Value = 100 - parseFloat(`${this.movieInfo.Ratings[i].Value}`)*10
                    }else{
                        this.movieInfo.Ratings[i].Value = 100 - parseFloat(`${this.movieInfo.Ratings[i].Value}`)
                    }
                }
                // this.movieInfo.Ratings[2].Value = parseFloat(`${this.movieInfo.Ratings[2].Value}`)
                // console.log(this.movieInfo.Ratings[1].Value);


                // this.movieInfo.Ratings[0].Value[1] = this.movieInfo.Ratings[0].Value[2];
                // console.log(this.movieInfo.Ratings[0].Value[1]);


                // console.log(intMovDat);
                // console.log(this.movieInfo.Ratings[0].Value[2]);
                // console.log(this.movieInfo.Ratings[0].Value[0] + this.movieInfo.Ratings[0].Value[2]);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        },
        setFavorites(id){
            // this.myFavorite = JSON.parse(localStorage.getItem('myFavorite')) || [];
            // this.myFavorite = id
            console.log(id)
            const movie = this.movieList.find(el => el.imdbID===id)
            const delFavoriteIndex = this.myFavorite.findIndex(el => el.imdbID===id);
            if(delFavoriteIndex === -1){
                this.myFavorite.push(movie);
                this.showAboutAdded();
                // console.log(this.myFavorite);
                // localStorage.setItem('myFavorite', JSON.stringify(this.myFavorite));
            //     localStorage.removeItem('myFavorite', JSON.stringify(this.myFavorite));
            }
            else{
                // localStorage.removeItem(this.myFavorite);
                // localStorage.removeItem('myFavorite', JSON.stringify(this.myFavorite));
                console.log(`delFavoriteIndex= ${delFavoriteIndex}`);

                this.myFavorite.splice(delFavoriteIndex, 1);
                this.showAboutDeleted();

            }
            localStorage.setItem('myFavorite', JSON.stringify(this.myFavorite));
            console.log(this.myFavorite);
        },
        showFavorites(){
            this.showFavoritesModal = true
            // this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
            console.log(`Check: ${this.myFavorite}`);
        },
        showAboutAdded(){
            this.showAboutAddedModal = true
        },
        showAboutDeleted(){
            this.showAboutDeletedModal = true
        },
        goToPage(pageNum) {
            this.page = pageNum

            console.log(`pageNum: ${pageNum}`);

            if(pageNum !== 1){
                this.ifDisabledPrev = true
            }
            if(pageNum <= 5){
                this.ifDisabledPrevButton = true
                this.showPaginationPrevButton = false
            }else{
                this.ifDisabledPrevButton = false
                this.showPaginationPrevButton = true
            }

            if(pageNum !== this.totalPages ){
                this.ifDisabledNext = true
            }
            if(pageNum >= (this.totalPages-5)){
                this.ifDisabledNextButton = true
                this.showPaginationNextButton = false
            }else{
                this.ifDisabledNextButton = false
                this.showPaginationNextButton = true            }

            // this.ifDisabledPrevButton = false
            // this.ifDisabledNextButton = false
            this.searchMovies()
        },
        goToPageMovies(new_page) {
            this.page = new_page
            this.searchMovies()
        }
    },
    computed: {
        // 02 Work
        movieListWithFavorite(){
            const arr = []
            
            this.movieList.forEach(el => {
                const findFav = this.myFavorite.find(item => {
                    return el.imdbID === item.imdbID
                    // return el.imdbID === item.id
                })

                el.inFav = findFav !== undefined ? true : false
                arr.push(el)
                
                // if (findFav !== undefined){
                //     el.inFav = true
                // }else{
                //     el.inFav = false
                // }

            })
            console.log(arr);
            return arr
        }
    },
    created() {
        this.myFavorite = JSON.parse(localStorage.getItem('myFavorite')) || [];
        // this.myFavorite = JSON.parse(localStorage.getItem('myFavorite'));
    }
}

Vue.createApp(App).mount('#app')




// alert( document.cookie );

// const my_cookie = document.cookie
// // alert( my_cookie );
// console.log(my_cookie);
// my_cookie.split('=')
// console.log(my_cookie);



// Toggle class="dark_theme" on body
// console.log(`Hello`);

const checkbox = document.getElementById('check_theme');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.body.classList.toggle('dark_theme');
    // document.cookie = "ThemeName=dark_theme";
    setCookie('ThemeName', 'dark_theme')
  } else {
    console.log("Checkbox is not checked..");
    document.body.classList.toggle('dark_theme');
    // document.cookie = "ThemeName=";
    deleteCookie('ThemeName');
  }
});


function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  


function setCookie(name, value, options = {}) {
  
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
  
  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }


