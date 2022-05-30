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
    };
    if(e.ctrlKey && e.code === "KeyS"){
        e.preventDefault();
        let some_text = document.querySelector(".get_text").value;
        div_edit.textContent = some_text;
        div_edit.style.display = "block";
        text_area.style.display = "none";
        div_edit.appendChild(resize_point);
    };
})


// <<================================================================>>
// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

const my_table = document.createElement('table');
my_table.setAttribute('id', 'myTable');
const table_thead_sort = document.createElement('thead');
table_thead_sort.setAttribute('id', 'table_head');
const table_tbody_sort = document.createElement('tbody');
table_tbody_sort.setAttribute('id', 'table_body');
// const table_tr_sort = document.createElement('tr');
// const table_th_sort = document.createElement('th');


// table_tr_sort.append(table_th_sort);
// table_thead_sort.append(table_tr_sort);
my_table.append(table_thead_sort);
my_table.append(table_tbody_sort);
document.getElementById('div_table').append(my_table);


// document.querySelector('th') = 'test';

const DATA = [
    {
        name: 'Zorita Serrano',
        age: 30,
        startDate: '01/06/2012'
    },
    {
        name: 'Airi Satou',
        age: 33,
        startDate: '28/11/2009'
    },
    {
        name: 'Bob Dou',
        age: 29,
        startDate: '15/10/2008'
    },
    {
        name: 'Michelle House',
        age: 37,
        startDate: '02/05/2011'
    },
    {
        name: 'Yuri Berry',
        age: 40,
        startDate: '25/06/2009'
    },
    {
        name: 'Jennifer Chang',
        age: 28,
        startDate: '14/11/2010'
    },
    {
        name: 'Shou Itou',
        age: 20,
        startDate: '14/08/2011'
    }
];


document.addEventListener('click', function(event){
    if(event.target.classList.contains("name")){
        console.log('click name');
        sortTable(0);
    }else if(event.target.classList.contains("age")){
        console.log('click age');
        sortTable(1);
    }else if(event.target.classList.contains("start_date")){
        console.log('click start_date');
        sortTable(2);
}
});

function viewHeaderTable(){
    let html = '';
        html = `
            <tr>
                <th class="name">Name </th>
                <th class="age">Age </th>
                <th class="start_date">Start date</th>
            </tr>
        `
    document.getElementById('table_head').innerHTML = html;
}

function viewBodyTable(){
    let html = '';
    DATA.forEach(element =>{
        html += `
        <tr>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.startDate}</td>
        </tr>
    `
    })
    document.getElementById('table_body').innerHTML = html; 
}

viewHeaderTable();
viewBodyTable();

function sortTable(n) {
    let table, 
        rows, 
        switching, 
        i, 
        x, 
        y, 
        shouldSwitch, 
        dir, 
        switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/

        // x = rows[i].getElementsByTagName("TD")[n];
        x = rows[i].getElementsByTagName("TD")[n].innerText.split('/').reverse().join('/ ');
        // y = rows[i + 1].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.split('/').reverse().join('/ ');
      
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
            if (x > y) {
            // if (parseInt(x.innerHtml) > parseInt(y.innerHtml)) {
            // if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
            //if (x.innerText.split('.') > y.innerText.split('.')) {
            // if (Number(x.innerText) > Number(y.innerText)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
            if (x < y) {
            // if (parseInt(x.innerHtml) < parseInt(y.innerHtml)) {
            // if (parseInt(x.innerHtml) < parseInt(y.innerHtml)) {
            //   if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
            //if (x.innerText.split('.') < y.innerText.split('.')) {
            // if (Number(x.innerText) < Number(y.innerText)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


//   function convertDate(d) {
//     var p = d.toString().split(".");
//     return +(p[2]+p[1]+p[0]);
//   }

// function sort_date(){
//     DATA.sort(function (a, b) {
//         a = a.startDate.split('.');
//         b = b.startDate.split('.');
//         return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
//     });
// };
// document.addEventListener('click', function(event){
//     // debugger
// // if(event.target.nodeName === "TH"){
// if(event.target.classList.contains("age")){
// console.log('click age');
// sort_number();
// }else if(event.target.classList.contains("name")){
// console.log('click name');
// sort_text();
// }else if(event.target.classList.contains("start_date")){
// console.log('click start_date');
// // sort_text();
// sort_date();
// }

// viewBodyTable();

// });

// function viewHeaderTable(){
//     let html = '';
//         html = `
//             <tr>
//                 <th class="name">| Name </th>
//                 <th class="age">| Age </th>
//                 <th class="start_date">| Start date</th>
//             </tr>
//         `
//     document.getElementById('table_head').innerHTML = html;
// }

// function viewBodyTable(){
//     let html = '';
//     DATA.forEach(element =>{
//         html += `
//         <tr>
//             <td>| ${element.name}</td>
//             <td>| ${element.age}</td>
//             <td>| ${element.startDate}</td>
//         </tr>
//     `
//     })
//     document.getElementById('table_body').innerHTML = html; 
// }

// viewHeaderTable();
// viewBodyTable();



// document.addEventListener('mouseover', function(event){
//     if(event.target.nodeName === "TH"){
//         // console.log('mouseover TH');
//         event.target.style.cursor = 'pointer';
//     }
// });

// function sort_number(){
//     return DATA.sort((a, b) => Number(a.age) - Number(b.age));
//     // rez = DATA.sort((a, b) => Number(b.age) - Number(a.age));
//     // rez = DATA.sort((a, b) => Number(a.age) - Number(b.age));
// };

// function sort_text(){
//     return DATA.sort((a,b)=>a.name.localeCompare(b.name));
// };

// function sort_date(){
//     DATA.sort(function (a, b) {
//         a = a.startDate.split('.');
//         b = b.startDate.split('.');
//         return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
//     });
// };


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
