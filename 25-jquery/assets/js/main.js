$(function(){
    $(".my_star").starRating({
        totalStars: 5,
        minRating: 6,
        ratedColor:'#FFDD3F',
        disableAfterRate: false,
        starSize: 25,
        initialRating: 4,
        starGradient: {
            start:'#FFDD3F',
            end:'#FFDD3F', 
        },
        strokeColor:'#FFDD3F',
        hoverColor:'#FFDD3F',
        emptyColor:'#8D91A3',
        starShape:'straight',
        strokeWidth: 1,
    });

})
