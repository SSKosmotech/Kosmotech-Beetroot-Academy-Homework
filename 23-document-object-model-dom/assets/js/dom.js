//HTML сторінка - кнопка і текст. Тиснемо кнопку і текст пропадає
// Повторно - текст вертається
//Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться.
//При повторном нажатии – текст должен снова отображаться.

// const text = 'Lorem ipsum dolor sit amet.'

// const div = document.createElement('div');
// const p = document.createElement('p');
// div.append(p);

// // div.style.border = '1px solid #999';
// // div.style.padding = '10px 20px';

// const button = document.createElement('button');
// button.setAttribute('type', 'button');

// button.innerText = 'Click to toggle text';

// button.onclick = function(){
//     // if(div.innerText === ''){
//         //     div.innerText = text;
//         // }else{
//             //     div.innerText = '';
//             // }
//             p.innerText = p.innerText==='' ? text : '';
//         }
        
//         const wrap = document.querySelector('#text_wrap');
        
//         wrap.append(div);
//         wrap.prepend(button);
        
//         // document.querySelector('#text_wrap').append(div);
//         // document.querySelector('#text_wrap').prepend(button);
        
// const style = {
//     wrap: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     body: {
//         backgroundColor: 'lightblue',
//         width: '90%',
//         maxWidth: '1110px',
//         margin: '0 auto'
//     },
//     div: {
//         border: '1px solid #999',
//         padding: '10px 20px',
        
//     },
//     button: {
//         // "border-radius": '4px',
//         borderRadius: '4px',                //можна і так
//         // "background-color": 'blue',
//         backgroundColor: 'blue',            //можна і так
//         color: '#fff',
//         cursor: 'pointer',
//         fontSize: '20px',
//         padding: '7px',
        
//     },
//     bar: {
//         border: '1px solid black',
//         margin: '20px auto',
//         height: '40px',
//         width: '80%'
//     },
//     scale: {
//         backgroundColor: 'blue',
//         width: '90%',
//         height: '38px'
//     }
// };

// function appStyle(styles, elem){
//     for(let prop in styles){
//         elem.style[prop] = styles[prop];
//     }
// }

// appStyle(style.div, div);
// appStyle(style.body, document.body);
// appStyle(style.button, button);
// appStyle(style.wrap, wrap);



// //Progress bar
// // Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.


// const bar = document.createElement('div');
// const scale = document.createElement('div');
// const buttonForScale = document.createElement('button');
// buttonForScale.setAttribute('type', 'button');
// buttonForScale.innerText = 'Add 5%'

// bar.append(scale);

// const progress_wrap = document.querySelector('.progress_wrap');
// progress_wrap.append(bar);
// progress_wrap.append(buttonForScale);

// buttonForScale.onclick = function(){
//     if(parseInt(scale.style.width) < 100){
//         scale.style.width = (parseInt(scale.style.width) + 5) + '%';
//     }else{
//         buttonForScale.setAttribute('disabled', 'disabled');
//         buttonForScale.style.opacity = '0.2';
//     }
// }


// appStyle(style.bar, bar);
// appStyle(style.scale, scale);
// appStyle(style.button, buttonForScale);

//Создать html-страницу со вкладками. С левой стороны страницы отображается несколько вкладок, по которым можно переключаться. У каждой вкладки есть свое содержимое, но в один момент времени отображается содержимое только активной вкладки.

//<<================================================================================>>
//1. Створити сторінку, що показує нумерований список пісень:

const style = {
    body: {
        backgroundColor: 'white',

    },
    button_open: {
        borderRadius: '4px',                //можна і так
        backgroundColor: 'blue',            
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px',
        marginTop: '20px',
        marginBottom: '50px'
    },
    button_close: {
        borderRadius: '4px',              
        backgroundColor: 'lightblue',            
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px',
        marginTop: '20px'
    },
    button_traffic_light: {
        borderRadius: '4px',                
        backgroundColor: 'black',            
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '7px',
        marginTop: '20px'
    },
    div_modal_window: {
        // backgroundColor: 'lightgreen',
        width: '40%',
        position: 'fixed',
        top: '10%',
        left: '30%',
        right: '30%',
        bottom: '10%',
        background: 'rgba(110,23,342,0.9)',
        zIndex: '1000',
        // opacity: 0; /* по умолчанию модальное окно прозрачно */
        margin: '0 auto',
        padding: '50px',
        color: 'white',
        fontSize: '50px',
        textAlign: 'center'
    },
    traffic_wrapper: {
        marginTop: '20px',
        background:'#333',
	    width: '150px',
	    height: '440px',
	    borderRadius: '10px',
	    textAlign: 'center',
	    padding: '1px 0',
	    border: '6px solid #000',
	    margin: 'auto'
    },
    traffic_circle1: {
        background:'#666',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        marginLeft: '10px',
        marginTop: '20px',
        lineHeight: '120px',
        transition: 'all 0.2s ease'
    },
    traffic_circle2: {
        background:'#666',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        marginLeft: '10px',
        marginTop: '20px',
        lineHeight: '120px',
        transition: 'all 0.2s ease'
    },
    traffic_circle3: {
        background:'#666',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        marginLeft: '10px',
        marginTop: '20px',
        lineHeight: '120px',
        transition: 'all 0.2s ease'
    }
};

function appStyle(styles, elem){
    for(let prop in styles){
        elem.style[prop] = styles[prop];
    }
}

appStyle(style.body, document.body);


let playList = [
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    },
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    }
];

const div_song = document.createElement('div');
const ol = document.createElement('ol');
let li = document.createElement('li');
let b = document.createElement('b');
let span = document.createElement('span');
li.append(b);
li.append(span);


for(let i = 0; i < playList.length; i++){
    b.innerText = playList[i].author+': ';
    span.innerText = playList[i].song;
    let li_clone = li.cloneNode(true);
    ol.append(li_clone);
}

div_song.append(ol);

document.querySelector('#num_song').append(div_song);

//<<================================================================================>>
//2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const button_open = document.createElement('button');
button_open.setAttribute('type', 'button');
button_open.innerText = 'Відкрити';

const button_close = document.createElement('button');
button_close.setAttribute('type', 'button');
button_close.innerText = 'Закрити';

const div_modal_window = document.createElement('div');
div_modal_window.style.display = 'none';
div_modal_window.innerText = 'Modal Window \n'
div_modal_window.append(button_close);


appStyle(style.button_open, button_open);
appStyle(style.div_modal_window, div_modal_window);
appStyle(style.button_close, button_close);

button_open.onclick = function(){
    if(div_modal_window.style.display === 'none'){
        div_modal_window.style.display = 'block';
    }
    
}

button_close.onclick = function(){
    if(div_modal_window.style.display === 'block'){
        div_modal_window.style.display = 'none';
    }
}



const wrap = document.querySelector('#modal_window');
wrap.append(button_open);
wrap.append(div_modal_window);

//<<================================================================================>>
//3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const button_traffic_light = document.createElement('button');
button_traffic_light.setAttribute('type', 'button');
button_traffic_light.innerText = 'Chancge Traffic Light';


const traffic_wrapper = document.createElement('div');
const traffic_circle1 = document.createElement('div');
const traffic_circle2 = document.createElement('div');
const traffic_circle3 = document.createElement('div');


appStyle(style.button_traffic_light, button_traffic_light);
appStyle(style.traffic_wrapper, traffic_wrapper);
appStyle(style.traffic_circle1, traffic_circle1);
appStyle(style.traffic_circle2, traffic_circle2);
appStyle(style.traffic_circle3, traffic_circle3);


// traffic_circle1.classList.toggle("red_color");
// traffic_circle2.classList.add("yellow_color");
// traffic_circle3.classList.add("green_color");

traffic_circle1.style.background = 'red';

button_traffic_light.onclick = function(){

    // for(let i = 0; i < 3; i++){
      

    // }

    debugger

    if(traffic_circle1.style.background === 'red'){
        traffic_circle2.style.background = 'yellow';
        traffic_circle1.style.background = 'rgb(102, 102, 102)';
    }else if(traffic_circle3.style.background === 'green'){
                traffic_circle1.style.background = 'red';  
                traffic_circle3.style.background = 'rgb(102, 102, 102)';
            }else{
                traffic_circle3.style.background = 'green';
                traffic_circle2.style.background = 'rgb(102, 102, 102)';
                traffic_circle1.style.background = 'rgb(102, 102, 102)';
            }  
}

traffic_wrapper.append(traffic_circle1);
traffic_wrapper.append(traffic_circle2);
traffic_wrapper.append(traffic_circle3);


// for(i=0; i < 3; i++ ){
//     let circle_clone = traffic_circle1.cloneNode(true);
//     traffic_wrapper.append(circle_clone);
// }





const wrap_traffic_light = document.querySelector('#traffic_light');
wrap_traffic_light.append(button_traffic_light);
wrap_traffic_light.append(traffic_wrapper);
