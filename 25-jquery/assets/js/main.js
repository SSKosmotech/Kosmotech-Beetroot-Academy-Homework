$(function(){

    $('.tab_button').click(function(){
        let id = $(this).attr('id');
        let i;
        let tabcontent = $(".tab_content");
        let tab_button = $(".tab_button");
        for (i = 0; i < tabcontent.length; i++) {
                $(tabcontent[i]).hide();
                $(tab_button[i]).removeClass("active");
            }

        if(id === 'tab_button_1'){
            id = 0;
        }else if(id === 'tab_button_2'){
            id = 1;
        }else{
            id = 2;
        }
        
        $(tabcontent[id]).show();
        $(tab_button[id]).addClass("active");
    });
    
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

    
    $('.chart').easyPieChart({
      // options 
      barColor: '#1AE780',
      trackColor: '#B7BACD',
    //   scaleColor: '#212534',
    //   scaleColor: 'red',
      scaleLength: 0.01,
      lineCap: 'round',
      lineWidth: 5,
      trackWidth: undefined,
      size: 75,
      rotate: 0, // in degrees
      animate: {
        duration: 1000,
        enabled: true
      },
      easing: function (x, t, b, c, d) { // easing function
        t = t / (d/2);
        if (t < 1) {
          return c / 2 * t * t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
      }
    });
    
})
