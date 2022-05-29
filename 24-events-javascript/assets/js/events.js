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
let some_text = "Some text, you can press \"ctrl + E\" to edit it ";
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
        e.preventDefault();
        let some_text = document.querySelector(".get_text").value;
        div_edit.innerText = some_text;
        div_edit.style.display = "block";
        text_area.style.display = "none";
    }
})



// <<================================================================>>
// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

const table_sort = document.createElement('table');
const table_thead_sort = document.createElement('thead');
table_thead_sort.setAttribute('id', 'table_head');
const table_tbody_sort = document.createElement('tbody');
table_tbody_sort.setAttribute('id', 'table_body');
// const table_tr_sort = document.createElement('tr');
// const table_th_sort = document.createElement('th');


// table_tr_sort.append(table_th_sort);
// table_thead_sort.append(table_tr_sort);
table_sort.append(table_thead_sort);
table_sort.append(table_tbody_sort);
document.getElementById('table').append(table_sort);

// document.querySelector('th') = 'test';

const DATA = [
    {
        name: 'Zorita Serrano',
        age: 30,
        startDate: '01.06.2012'
    },
    {
        name: 'Airi Satou',
        age: 33,
        startDate: '28.11.2009'
    },
    {
        name: 'Michelle House',
        age: 37,
        startDate: '02.05.2011'
    },
    {
        name: 'Yuri Berry',
        age: 40,
        startDate: '25.06.2009'
    },
    {
        name: 'Jennifer Chang',
        age: 28,
        startDate: '14.11.2010'
    },
    {
        name: 'Shou Itou',
        age: 20,
        startDate: '14.08.2011'
    }
];



function viewHeaderTable(){
    let html = '';
        html = `
            <tr>
                <th class="name">| Name </th>
                <th class="age">| Age </th>
                <th class="start_date">| Start date</th>
            </tr>
        `
    document.getElementById('table_head').innerHTML = html;
}

function viewBodyTable(){
    let html = '';
    DATA.forEach(element =>{
        html += `
        <tr>
            <td>| ${element.name}</td>
            <td>| ${element.age}</td>
            <td>| ${element.startDate}</td>
        </tr>
    `
    })
    document.getElementById('table_body').innerHTML = html; 
}

viewHeaderTable();
viewBodyTable();

document.addEventListener('click', function(event){
            // debugger
    // if(event.target.nodeName === "TH"){
    if(event.target.classList.contains("age")){
        console.log('click age');
        sort_number();
    }else if(event.target.classList.contains("name")){
        console.log('click name');
        sort_text();
    }else if(event.target.classList.contains("start_date")){
        console.log('click start_date');
        // sort_text();
        sort_date();
    }
    viewBodyTable();
    
});

document.addEventListener('mouseover', function(event){
    if(event.target.nodeName === "TH"){
        // console.log('mouseover TH');
        event.target.style.cursor = 'pointer';
    }
});

function sort_number(){
    return DATA.sort((a, b) => Number(a.age) - Number(b.age));
    // rez = DATA.sort((a, b) => Number(b.age) - Number(a.age));
    // rez = DATA.sort((a, b) => Number(a.age) - Number(b.age));
};

function sort_text(){
    return DATA.sort((a,b)=>a.name.localeCompare(b.name));
};

function sort_date(){
    // debugger
    // rez = DATA.sort((a, b) => Number(a.startDate) - Number(b.startDate));
    
    // return DATA.sort((a,b)=>b.startDate.localeCompare(a.startDate));
    // rez = DATA.slice().sort((a, b) => b.startDate - a.startDate);
    
    // return +b.startDate - +a.startDate;
    
    // return DATA.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    // rez = DATA.sort(function(a, b) {
    //     if (a.startDate < b.startDate) return 1;
    //     if (a.startDate > b.startDate) return -1;

    //     });

    // rez = DATA.sort((a, b) => {
    //     if (a.startDate < b.startDate) {
    //       return 1;
    //     }
    //     if (a.startDate > b.startDate) {
    //       return -1;
    //     }
    //   });

    // return DATA.sort(Date.parse(b.startDate) - Date.parse(a.startDate));

    // console.log(DATA.sortBy(DATA, 'date'));

    // rez = DATA.sort((a,b)=> Number(new Date(a.startDate)) - Number(new Date(b.startDate)));
    // return rez;

    DATA.sort(function (a, b) {
        a = a.startDate.split('.');
        b = b.startDate.split('.');
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    });
};


// <<================================================================>>
// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
div_edit.style.border = '1px solid blue';
div_edit.style.width = '30%';
div_edit.style.height = '200px';
div_edit.style.overflow = 'hidden';
div_edit.style.position = 'relative';

let resize_point = document.createElement('div');
div_edit.appendChild(resize_point);
resize_point.style.width = '10px';
resize_point.style.height = '10px';
resize_point.style.background = 'red';
resize_point.style.position = 'absolute';
resize_point.style.right = '0';
resize_point.style.bottom = '0';
resize_point.style.cursor = 'sw-resize';

resize_point.addEventListener('mousedown', function(){
    console.log('Init resize');
    document.addEventListener('mousemove', resizeDiv);
    document.addEventListener('mouseup', stopResize);
});


function resizeDiv(e){
        div_edit.style.width = (e.clientX - div_edit.offsetLeft) + 'px';
        div_edit.style.height = (e.clientY - div_edit.offsetTop) + 'px';
};

function stopResize(e){
    document.removeEventListener('mousemove', resizeDiv);
    document.removeEventListener('mouseup', stopResize);

}


