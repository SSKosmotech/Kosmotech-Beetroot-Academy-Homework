// const btn = document.getElementById('btn');

// btn.onclick = btnHandler;
// // btn.onclick = btnHandler2;

// const list = document.querySelector('.list');


// function btnHandler(e){
//     // alert('Hello');
//     // const list = document.querySelector('.list');
//     console.log(e);
//     e.stopPropagation();
//     const newLi = document.createElement('li');
//     newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
//     newLi.innerText = 'Hello World!';
//     list.append(newLi);
// }

// // function btnHandler2(){
// //     alert('World');
// // }
// //////////////////////////////////////


// function liColorChangeHandler(){
//     console.log('clicked');
// }

// // const liElements = document.querySelectorAll(".list li");
// const liElements = document.getElementsByTagName("li");
// console.log(liElements);

// [...liElements].forEach(li =>{
//     li.onclick = liColorChangeHandler;
// })

// document.body.addEventListener('contextmenu', function(e){
//     console.log('contex');
//     e.stopPropagation();
//     e.preventDefault();
//     const div = document.createElement('div');
//     div.className = 'my_context';
//     div.style.left = e.clientX + 'px';
//     div.style.top = e.clientY + 'px';
//     document.body.append(div);
// })

// // const list = document.querySelector('.list');
// // const newLi = document.createElement('li');
// // // newLi.onclick = liColorChangeHandler; //Приходиться додавати ще раз функцію
// // newLi.innerText = 'Hello World!';
// // list.append(newLi);


// // document.body.addEventListener('click', function(){
// //     console.log('click on body');
// // })

// document.body.addEventListener('click', function(event){
//     // console.log(event);
//     if(event.target.nodeName === "LI"){ // або можна Localname використовувати (а nodeName - з великих літер)
//         // liColor(event);
//         liColor(event.target);
//         // btnHandler();
//         // if(event.target.classList.contains("red")){
//         //     event.target.style.color = 'red';
//         // }
//         // if(event.target.classList.contains("blue")){
//         //     event.target.style.color = 'blue';
//         // }
//     }
//     // if(event.target.nodeName === "P"){ // або можна Localname використовувати
//     //     btnHandler();
//     // }
//     // console.log(event);
//     console.log('click on body');
// });

// list.addEventListener('click', function(){
//     console.log('click on list');
// });

// // function liColor(event){
// //     if(event.target.classList.contains("red")){
// //         event.target.style.color = 'red';
// //     }
// //     if(event.target.classList.contains("blue")){
// //         event.target.style.color = 'blue';
// //     }
// // }

// function liColor(elem){
//     if(elem.classList.contains("red")){
//         elem.style.color = 'red';
//     }
//     if(elem.classList.contains("blue")){
//         elem.style.color = 'blue';
//     }
// }


// document.body.addEventListener('keydown', function(e){
//     if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
//         e.preventDefault();
//         console.warn("Не можна копіювати");
//         return false
//     }
//     console.log(e);
// });

// document.body.addEventListener('keyup', function(e){
//     console.log(e);
// });

// document.body.addEventListener('keydown', function(e){
//     blockCopy(e);
//     console.log(e);
// })

// function blockCopy(e){
//     if(e.ctrlKey && e.code==="KeyC" || e.code==="F12" || e.ctrlKey && e.code==="KeyU"){
//         e.preventDefault();
//         console.warn("Не можна копіювати");
//         return false
//     }
// }


// <<================================================================>>
//1. Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

let wrap_text = document.getElementById('edit_text')

const div_edit = document.createElement('div');
let some_text = "Lorem ipsum dolor sit amet.";
div_edit.innerText = some_text;
// div_edit.classList.add("action_div");

let text_area = document.createElement('textarea');
// text_area.classList.add("action_text_area");
text_area.innerText = some_text;
text_area.style.display = "none";
text_area.classList.add("get_text");



wrap_text.append(div_edit);
wrap_text.append(text_area);

// wrap_text = text_area;

document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.code === "KeyE"){
        e.preventDefault();
        div_edit.style.display = "none";
        text_area.style.display = "block";
    }
})

document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.code === "KeyS"){
        debugger
        e.preventDefault();
        let some_text = document.querySelector(".get_text").value;
        div_edit.innerText = some_text;
        div_edit.style.display = "block";
        text_area.style.display = "none";
    }
})



