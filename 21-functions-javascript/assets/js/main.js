// var c;
// alert('Hello, world');
// console.log('dddddddddddddefrefg');
// alert('Hello, world2');

// const answer = confirm('delete item?');
// console.log(answer);

// if(answer){
//     alert('Select YES')
// } else {
//     alert('Select No')
// }

// if(confirm('delete item?')){
//     alert('Select YES')
// } else {
//     alert('Select No')
// }

// if(confirm('delete item?')){
//     // let q = 'w';
//     var q = 'w'; //спрацює, бо var піднімиться вверх
//     alert('Select YES')
// } else {
//     alert('Select No')
// }
// console.log(q); // тут q не виведеться, бо вона лишилася в {...}

// const user_name = prompt('What is your name?');
// console.log(user_name);

// const a = 2;
// // a = 5;
// console.log(a);

// let b = 1;
// b = 6;
// console.log(b);

// console.log(c);
// c = 3;
// console.log(c);

// const integer = 12;
// const float = 12.34;
// const text = 'Lorem ipsum';
// const text2 = "I'am";
// const text3 = 'I\'am'; //екранізація
// const company = 'ООО "Рога и копыта"'
// const company2 = `ООО "Рога и
// можна так копыта"`

// hoisting - це змінні, var - яки вспливають до гори і мають значення undefine

// const isTrue = false;
// const undef = undefined;
// const Null = null;
// const NotANumber = NaN;
// const arr = [1,2,3,4]; //масив
// const obj = {'a':1, 'b':2} // ключ і значення
// const func = function(){alert('1')}

// console.log(integer, typeof integer);
// console.log(float, typeof float);
// console.log(text, typeof text);
// console.log(isTrue, typeof isTrue);
// console.log(undef, typeof undef);
// console.log(Null, typeof Null);
// console.log(NotANumber, typeof NotANumber);
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);
// console.log(func, typeof func);

// function sum10(a) {
//     return a+10;
// }

// console.log(sum10(1));
// console.log(sum10(20));
// console.log(sum10('10'));

// function myPow() {
//     // debugger;
//     const num = parseInt(prompt('Enter integer number'));
//     const num2 = parseInt(prompt('Enter integer number 2'));
//     const rez = num**num2;
//     // const rez = Math.pow(num, num2);
//     alert(rez);
// }


// // const PI = Math.PI

// function avgNum() {
//     // debugger;
//     const num = parseInt(prompt('Enter integer number'));
//     const num2 = parseInt(prompt('Enter integer number 2'));
//     const rez = (num+num2)/2;
//     alert(rez);
// }

// function Square() {
//     const num = parseInt(prompt('Enter the length of the square'));
//     const rez = num**2; // дві зірочки - це ступінь
//     alert(rez);
// }

// function km2ml() {
//     const km = parseInt(prompt('Enter kilometers'));
//     const K = 0.621371;
//     const ml = km*K;
//     alert(`In miles this: ${ml} miles`);
// }

// function calc() {
//     const num = parseInt(prompt('Вкажіть число 1'));
//     const num2 = parseInt(prompt('Вкажіть число 2'));
//     const action = prompt('Вкажіть дію з: +, -, *, /');
//     let rez;
//     if (action==='+') { // === бо повертається текст
//         rez = num + num2;
//     } else if (action==='-') {
//         rez = num - num2;
//     } else if (action==='*') {
//         rez = num * num2;
//     } else if (action==='/') {
//         rez = num / num2;
//     } else {
//         alert('Недопустимий символ');
//     }
    
//     if (rez != undefined) {
//         alert(`Результат — ${rez}`);
//     }
// }

// function findX() {
//     const a = parseInt(prompt('Вкажіть число 1'));
//     const b = parseInt(prompt('Вкажіть число 2'));
//     const x = b * (-1) / a;
//     alert(`X дорівнює :${x}`);
// }


// function TimeToDayEnd() {
//     const hours = parseInt(prompt('Enter hours'));
//     const minutes = parseInt(prompt('Enter minutes'));
//     const minutesTotalLeft = (24 * 60) - (hours * 60 + minutes );
//     const hoursLeft = parseInt(minutesTotalLeft / 60);
//     const minutesLeft = minutesTotalLeft - hoursLeft * 60;
//     alert(`hours lef: ${hoursLeft}, Minutes left: ${minutesLeft}`);
// }

// function digit2() {
//     const abc = +prompt('Введіть трьохзначне число');
//     const rez = parseInt((abc%100) / 10);
//     alert(`Друга цифра: ${rez}`);
// }


// function hello(name) {
//     if (name == '') {
//         return false;
//     }
//     alert('Hello, '+name);
// }

// function hello(name) {
//     if (name !== '') {
//         alert('Hello, '+name);
//     } else {
//         alert('Enter your name');
//     }
// }


// function numCheck(num) {
//     if(num<0) {
//         alert('-');
//     } else if (num>0) {
//         alert('+');
//     } else if (num == 0) {
//         alert('0');
//     } else {
//         alert('Enter number');
//     }
// }

// function checkEmail(email) {
//     if(email!='') {
//         if(isValidEmail(email)){
//             return true;
//         } else {
//             alert('Email is not valid');
//         }
//     } else {
//         alert('Enter your email');
//     }
// }


// const num = 4;
// let y = 0;
// if(num < 12) {
//     y = 2;
// } else if ((num >= 12 && num) < 18 && num !=16) {
//     y = 1;
// } else if(num == 16 || num == 25 || num == 27 {
//     y=3;
// } else if(
//     (num >= 20 & num <= 30) ||
//     (num > 40 && <= 50)
// ) {

// }
// console.log(y);


//Високосний рік 

// function isLeapYear(year) {
//     if (year%400===0 || (year%4===0 && year%100!==0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let s ='';
// const num = 2;
// switch (num) {
//     case 1:
//         s = '!'
//         break;
//     case 2:
//         s='@';
//         break;
// }
// console.log(s);


// let s ='';
// const num = prompt('Enter number');
// switch (num) {
//     case '1':
//         s = '!'
//         break;
//     case '2':
//         s = '@';
//         break;
//     default:
//         s = 'Invalid value'
//         break;
// }
// alert(s);
// console.log(s);


// let d;
// const num = prompt('Enter month number');
// switch (num) {
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         d = '31'
//         break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         d = '30';
//         break;
//     case '2':
//         d = '28';
//         break;
//     default:
//         d = 'Invalid value'
//         break;
// }
// alert(d);
// console.log(s);


//const v = (condition) ? value1 : value2;
//const acceptLang = (currentLang === 'ua') ? 'uk_UA' : 'eb_GB'

// const acceptLang = '';
// if(currentLang === 'ua') {
//     acceptLang = 'uk_UA'
// } else {
//     acceptLang = 'eb_GB'
// }


// function checkNumber() {
//     const num = parseInt(prompt('Enter number'))
//     let rez;
//     if(num < 0) {
//         rez = '-';
//     } else if(num > 0) {
//         rez = '+';
//     } else if(num == 0) {
//         rez = '0';
//     }
//     alert(rez);
// }


// function whatAge() {
//     const age = parseInt(prompt('Введи, скільки тобі років:'));
//     if (age >= 0 && age <= 120) {
//         alert(`Все вірно, тобі в діапазоні від 0-120 років включно: ${age} років`);
//     } else if(age < 0 || age > 120) {
//         alert(`Помилка, тобі не в діапазоні 0-120 років`);
//     }
// }

// <<============================================================================>>

// 2 && 0 && 3 => 0
// if(true && false && true)

// 2 || 0 || 3 => 2
// 2 && 0 || 3  => 3

// 2 && 3 || 4 && 0 && 1


// function checkTime() {
//     const hours = prompt('Enter hours');
//     const minutes = parseInt(prompt('Enter minutes'));
//     const sec = parseInt(prompt('Enter seconds'));
//     let errText = '';
//     if( hours === '') {
//         errText += 'Enter hours. ';
//     } else {
//         hours = parseInt(hours);
//     }
//     if(isNaN(hours)) {
//         errText = errText + 'Use numbers for hours value. ';
//     }
//     if(hours < 0 || hours > 24) {
//         errText = errText + 'Enter hours value [0..23]. ';
//     }
//     // для хвилин і секунд те ж саме; Для хвилин: < 0 || > 60
//     if(errText !==''){
//         alert(errText);
//     } else {
//         alert('Time is correct: '+hours+':'+minutes+':'+sec);
//     }
// }


// for (let i=0;i<10;i++) {
//     console.log(i);
// }

// for (let i=1;i<=10;i++) {
//     console.log(i);
// }

// for (let i=2;i<=10;i+=2) {
//     console.log(i);
// }


// for (let i=1;i<=10;i+=2) {
//     console.log(i);
// }

// for (let i=1000;i<=1010;i+=2) {
//     console.log(i);
// }

// const year = new Date().getFullYear();
// for (let i=year;i>(year - 60);i--) {
//     console.log(i);
// }

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let answer = true;
// while(answer===true){
//     answer = confirm('Question?');
// }

// let answer = false;
// do {
//     answer = confirm('Question?');
// } while(answer === true)


// for (let i=1;i<=10;i++) {
//     console.log(i);
// }


// function task1() {
//     const num = parseInt(document.getElementById('task_1_number').value);
//     let rez = '';
//     let i = 0;
//     while (i<num) {
//         rez += '# ' 
//         i++;
//     }
//     document.getElementById('task_1_result').innerText = rez;
// }

// function task2() {
//     const num = parseInt(document.getElementById('task_2_number').value);
//     let rez = '';
//     let i = num;
//     while (i>=0) {
//         rez += i+' ' 
//         i--;
//     }
//     document.getElementById('task_2_result').innerText = rez;
// }

// function task4() {
//     const num1 = parseInt(document.getElementById('task_4_number1').value);
//     const num2 = parseInt(document.getElementById('task_4_number2').value);
//     let rez = '';
//     const minNum = num1<num2 ? num1 : num2;
//     let i = 1;
//     while (i<=minNum/2){
//         if (num1%i==0 && num2%i==0) {
//             rez += i+', ';
//         }
//         i++;
//     }
//     if(minNum===num1) {
//         if(num2%num1==0) {
//             rez += num1;
//         }
//     } else {
//         if(num1%num2==0) {
//             rez += num2; 
//         }
//     }
//     document.getElementById('task_4_result').innerText = rez;
// }


//5! = 1 * 2 * 3 * 4 * 5 //факторіал

// const _21 = true;
// const _22 = false;


// function task1() {
//     const age = parseInt(document.getElementById('task_1_number').value);
//     let rez = '';
//     if (isNaN(age) || age < 0 || age > 120) {
//         rez = 'Введіть будь ласка числа, або не мінусове або менше 120.';
//     } else if (age >= 60) {
//         rez = 'Ви — пенсіонер';
//     } else if (age >= 18) {
//         rez = 'Ви — дорослий';
//     } else if (age >= 12) {
//         rez = 'Ви — підліток';
//     } else if (age <= 11) {
//         rez = 'Ви — дитина';
//     }
//     document.getElementById('task_1_result').innerText = rez;
// }

// function task2() {
//     const num = parseInt(document.getElementById('task_2_number').value);
//     let rez = '';
//     if (isNaN(num) || num < 0 || num > 9) {
//         rez = 'Введіть будь ласка число від 0 до 9.';
//     } else {
//         switch (num) {
//                 case 0:
//                     rez = ')'
//                     break;
//                 case 1:
//                     rez = '!'
//                     break;
//                 case 2:
//                     rez = '@';
//                     break;
//                 case 3:
//                     rez = '#';
//                     break;
//                 case 4:
//                     rez = '$';
//                     break;
//                 case 5:
//                     rez = '%';
//                     break;
//                 case 6:
//                     rez = '^';
//                     break;
//                 case 7:
//                     rez = '&';
//                     break;
//                 case 8:
//                     rez = '*';
//                     break;
//                 case 9:
//                     rez = '(';
//                     break;
//                 default:
//                     rez = 'Введіть повторно'
//                     break;
//                 }
//     }
//     document.getElementById('task_2_result').innerText = rez;
// }


// function task3() {
//     const num1 = parseInt(document.getElementById('task_3_number1').value);
//     const num2 = parseInt(document.getElementById('task_3_number2').value);
//     let rez = 0;
//     if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
//         rez = 'Введіть будь ласка цілі числа.';
//     } else {
//         const maxNum = num1>num2 ? num1 : num2;
//         const minNum = num2<num1 ? num2 : num1;
//         for (let i = minNum; i <= maxNum; i++) {
//             rez += i;
//         }
//     }
//     document.getElementById('task_3_result').innerText = rez;
// }

// function task4() {
//     const num1 = parseInt(document.getElementById('task_4_number1').value);
//     const num2 = parseInt(document.getElementById('task_4_number2').value);
//     let rez = '';
//     const minNum = num1<num2 ? num1 : num2;
//     let i = 1;
//     let nsd = minNum;
//     while (i<=minNum/2){
//         if (num1%i==0 && num2%i==0) {
//             rez += i+', ';
//             nsd = i;
//         }
//         i++;
//     }
//     if(minNum===num1) {
//         if(num2%num1==0) {
//             rez += num1;
//             nsd = num1;
//         }
//     } else {
//         if(num1%num2==0) {
//             rez += num2; 
//             nsd = num2;
//         }
//     }
//     rez = nsd;
//     document.getElementById('task_4_result').innerText = rez;
// }

// function task5() {
//     const num = parseInt(document.getElementById('task_5_number').value);
//     let rez = '';
//     if (isNaN(num) || num < 0) {
//         rez = 'Введіть будь ласка цілі числа.';
//     } else {
//         let i = 1;
//         while (i <= num) {
//             if (num % i == 0) {
//                 rez = rez + i+', '
//             }
//             i++;
//         }
//     }
//     document.getElementById('task_5_result').innerText = rez;
// }

// function task6() {
//     const abcde = parseInt(document.getElementById('task_6_number').value);
//     let rez = '';
//     const _5Num = abcde%10;
//     const _4Num = parseInt(abcde/10%10);
//     const _3Num = parseInt(abcde/100%10);
//     const _2Num = parseInt(abcde/1000%10);
//     const _1Num = parseInt(abcde/10000);
//     abcde2edcba = _5Num * 10000 + _4Num * 1000 + _3Num * 100 + _2Num * 10 + _1Num;
//     if(abcde == abcde2edcba) {
//         rez = 'Це паліндром';
//     } else {
//         rez = 'Не паліндром';
//     }
//     document.getElementById('task_6_result').innerText = rez;
// }

// function task7() {
//     const purchaseAmount = parseInt(document.getElementById('task_7_number').value);
//     let rez = 0;
//     if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
//         rez = `Введіть будь ласка ціле число, і не мінусове і не 0.`;
//     } else if (purchaseAmount >= 500) {
//         rez = (purchaseAmount * 0.93).toFixed(2);
//     } else if (purchaseAmount < 500 && purchaseAmount >= 300) {
//         rez = (purchaseAmount * 0.95).toFixed(2);
//     } else {
//         rez = (purchaseAmount * 0.97).toFixed(2);
//     }
//     document.getElementById('task_7_result').innerText = rez;
// }



// function checkTen () {
//     let dodatni = 0,
//         videmni = 0,
//         nuli = 0,
//         parni = 0,
//         neparni = 0,
//         result = '',
//         number = 0,
//         allNumbers = '',
//         i = 0;
//     const limit = 10;
//     while(i < limit) {
//         number = parseInt(prompt('Enter number'));
//         if(!isNaN(number)) {
//             allNumbers += number+', ';
//             if(number === 0){
//                 nuli++;
//             } else {
//                 if(number > 0) {
//                     dodatni++;
//                 } else {
//                     videmni++;
//                 }
//             }
//             if(number%2===0) {
//                 parni++;
//             } else {
//                 neparni++;
//             }
//             i++;
//         }
//     }
//     result = `Додатні: ${dodatni}, Від'ємні: ${videmni}, Нулі:${nuli}, Парні:${parni}, Непарні: ${neparni}`;
//     document.getElementById('task_8_result').innerHTML = allNumbers+'<br>'+result;
// }

// // function task8() {
// //     let i = 0;
// //     while (i < 9) {
// //         const num = document.getElementById('task_8_number').value;
// //     }

// //     document.getElementById('task_8_result').innerText = num;
// // }







//     function task9() {
//         let dayWeek = new Date().getDay();
//         let d = dayWeek;
//         let answer = true;
//         while(answer === true) {
//             switch(d) {
//                 case 1:
//                     dayWeek = 'Понеділок'
//                     d ++;
//                     break;
//                 case 2:
//                     dayWeek = 'Вівторок'
//                     d ++;
//                     break;
//                 case 3:
//                     dayWeek = 'Середа'
//                     d ++;
//                     break;
//                 case 4:
//                     dayWeek = 'Четвер'
//                     d ++;
//                     break;
//                 case 5:
//                     dayWeek = 'Пятниця'
//                     d ++;
//                     break;
//                 case 6:
//                     dayWeek = 'Субота'
//                     d ++;
//                     break;
//                 case 7:
//                     dayWeek = 'Неділя'
//                     d = 1;
//                     break;
//                 }
//             answer = confirm(`День тижня: ${dayWeek}. Хочеш побачити наступний день?`);
//         }
//     }
         
//     function task10() {
//         const num = parseInt(prompt('Введи число від 0...100'));
//         let zero = 0;
//         let high = 100;
//         let error;
//         let N;
//         if (isNaN(num) || num < 0 || num > 100) {
//             error = 'Введи число від 0...100.';
//             alert(error);
//         } else {
//                 while (N != num) {
//                     N = Math.round((zero+high) / 2);
//                     let sign = prompt(`Ваше число більше \>, меньше \<, чи дорівнює ${N}`);
//                     switch(sign) {
//                         case '=':
//                             alert(`УРА, Ви загадали ${N}`);
//                             break;
//                         case '>':
//                             zero = N;
//                             break;
//                         case '<':
//                             high = N;
//                             break;
//                     }
//                 }  
//             }
//     }


//     function task11() {
//         let rez = '';
//         let multiplication;
//         for (let num = 2; num < 10; num++) {
//             for (let i = 1; i < 11; i++) {
//                 multiplication = num * i;
//                 rez += num + ' * ' + i + ' = ' + multiplication + '; \n'
//             }
//         }
//         document.getElementById('task_11_result').innerText = rez;
//     }


//<<===============================================================>>

// function ask() {
//     let answer = true;
//     while(answer === true){
//         answer = confirm('Question?');
//     }
//     alert('END');
// }


// let r = 0;
// for (let i=2; i<=9;i++){
//     for (let j=1; j<=10; j++) {
//         r = i * j
//         console.log(i+' * '+j+' = '+r );
//     }

// }


// prompt 14
// prompt 08
// prompt 2005
// d+1
// 15/08/2005


// prompt 31
// prompt 08
// prompt 2005
// d=1
// m++

// 1/09/2005


// 31/12/2022
// // d+1
// d=1;
// // m++ 13?
// m=1;
// Y++ 2023
// 01/01/2023


// function sum(a,b) {
//     let c = a + b;
//     return c;
// }

// const summa = sum(100,1000);
// console.log(summa);


// const number1 = 5;
// const number2 = 7;

// const number21 = 12;
// const number22 = 45;

// function sum(a,b) {
//     let c = a + b;
//     return c;
// }

// const summa = sum(number1,number2);
// const summa2 = sum(number21,number22);
// console.log(summa);
// console.log(summa2);


// const number1 = 5;
// const number2 = 7;

// const number21 = 12;
// const number22 = 45;

// function sum(a = 1,b = 10) {
//     let c = a + b;
//     return c;
// }

// const summa = sum(number1);
// const summa2 = sum(number21,number22);
// console.log(summa);
// // console.log(summa2);

//scope  //функція в середині функції

// function sum(a = 0,b = 0) {
//     console.log(arguments)
//     function resultText(s){
//         console.log(arguments)
//         return 'Sum = ' + s;
//     }
//     let c = a + b;
//     return resultText(c);
// }

// const summa = sum(number21, number22);
// console.log(summa);
// // console.log(summa2);
// // resultText(123;)


// function calc(a=0,b=0,action='+') {
//     if(action==='+') {
//         return a + b;
//     } else if (action==='-') {
//         return a - b;
//     } else if (action==='*') {
//         return a * b;
//     } else if (action==='/') {
//         return a / b;
//     }
// }

// const r = calc(1,2,'+'); //не знайде

// function calc(a=0,b=0,action='+') {
//     let r = 0;
//     if(action==='+') {
//         r = a + b;
//     } else if (action==='-') {
//         r = a - b;
//     } else if (action==='*') {
//         r = a * b;
//     } else if (action==='/') {
//         r = a / b;
//     }
//     return r;
// }


// Dont
// Repeat
// Yorself

// function sum(a = 0,b = 0, text) {
//     console.log(arguments)
//     function resultText(s, text){
//         console.log(arguments)
//         return text + s;
//     }
//     let c = a + b;
//     return resultText(c);
//     console.log();
// }

//expression function
// const sum2 = function(a,b) {
//     return a + b;
// }

// console.log(sum2(1,2));


// function sum(a = 0,b = 0, text) {
//     const resultText = function(s, text){
//         return text + s;
//     }
//     let c = a + b;
//     return resultText(c);
//     console.log();
// }

//стрілочна функція !!!
// const sum2 = (a,b) => a+b;
//або
// const sum2 = (a,b) => {
//     return a+b;
// }

console.log(sum2(1,5));

// function addZero(n=0) {
//     let r = '';
//     if(n<10){
//         r = '0'+n
//     } else {
//         r = ''+n
//     }
//     return r;
// }

// код вище, переписаний у вигляді стрілкової функції
// const addZero = (n=0) => n<10 ? '0'+n : ''+n;

// const nowDate = `${addZero(2)}/${addZero(4)}/2022 ${addZero(4)}:${addZero(23)}`;


// function sum(a = 0,b = 0, text) {
//     console.log(arguments)
//     function resultText(s, text){
//         console.log(this.__proto__)
//         return text + s;
//     }
//     let c = a + b;


//     setTimeout(function(){
//         let c = 1111; 
//         console.log('hello' + c);
//     }, 1000); //затримка в мілісекундах
//     return resultText(c, '');
//     console.log();
// }

/*
* ЧИСТА ФУНКЦІЯ
* 1. Приймати аргументи
* 2. При тих самих аргументах завжди однаковий результат
* 3. Не повинна мати побічних ефектів (не повинна викликати в собі побічну функцію), console.log() наприклад - це і є використання побічної функції !!!
* 
* 
* 
* ФУНКЦІЇ ВИЩОГО ПОРЯДКУ (або, чи)
* 1. Функція приймає в якості аргументу іншу функцію
* 2. Функція повертає в якості результату виконання іншу фнкцію
* 
*/

// function sum(a, b, callback) {
//     console.log(arguments);
//     if(a===b){
//         callback();
//     } else {
//         return a + b;
//     }
// }

// function sumCallback () {
//     alert('Lorem');
// }

// sum(1,2,sumCallback);


// function sum(a, b, callback) {
//     console.log(arguments);
//     if(a===b){
//         callback(a+b);
//     } else {
//         return a + b;
//     }
// }

// function sumCallback(x) {
//     alert('Lorem'+x);
// }

// sum(1,2,sumCallback);


// sum (1,1,(x)=>{
//     alert('Lorem'+x);
// })


// function sumAny(number) {
//     return function sumNumber(a){
//         return number + a;
//     }
// }

// Код вище, переписаний як стрілкова функція
// function sumAny(number) {
//     return a => number + a;
// }

// const sumTen = sumAny(10);
// const sum100 = sumAny(100);
// const sum20 = sumAny(20);


// console.log(sumTen(2));
// console.log(sum100(35));
// console.log(sum20(20));
// console.log(sum100(56));

//<<=======================================>>






function showLength(){
    return arguments.length;
}
    

function task1() {
    let rez = '';
    rez = `Посилання на функцію, яка буде виводити кількість переданиї їй аргументів: ${showLength}`;
    showResult(rez, 'task_1_result');
}


function task2() {
    let rez = 0;
    let num1 = parseFloat(document.getElementById('task_2_number1').value);
    let num2 = parseFloat(document.getElementById('task_2_number2').value);
    rez = check2Num(num1, num2);
    showResult(rez, 'task_2_result');
}

function check2Num (a, b) {
    let r = 0;
    if(a<b){
        return r = -1;
    } else if(a>b) {
        return r = 1;
    } else if(a===b){
        return r = 0;
    }
}


function task3() {
    let rez = 0;
    let num = parseInt(document.getElementById('task_3_number').value);
    rez = factorial(num);
    showResult(rez, 'task_3_result');
}

function factorial(x){
    let f = 1;
    for(let i=1;i<=x;i++){
        f *= i;
    }
    return f;
}
//5! = 1 * 2 * 3 * 4 * 5 //факторіал


function task4() {
    debugger;
    let num1 = parseInt(document.getElementById('task_4_number1').value),
        num2 = parseInt(document.getElementById('task_4_number2').value),
        num3 = parseInt(document.getElementById('task_4_number3').value);
    rez = '';
    if(getAndCheck('task_4_number1')!==false && getAndCheck('task_4_number2')!==false || getAndCheck(task_4_number3)!==false){
        num1 = getAndCheck('task_4_number1');
        num2 = getAndCheck('task_4_number2');
        num3 = getAndCheck('task_4_number3');
    } else {
        return false;
    }
    rez =convertToNumber(num1, num2, num3);
    showResult(rez, 'task_4_result');
}

function convertToNumber(a, b, c) {
    let r = 0;
    return r =  Number(`${a}${b}${c}`);
}


function task5() {
    debugger;
    let num1 = parseInt(document.getElementById('task_5_number1').value),
        num2 = parseInt(document.getElementById('task_5_number2').value);
    rez = '';
    rez = square(num1, num2);
    showResult(rez, 'task_5_result');
}

function square(a, b){
    debugger;
    let r;
    if(!isNaN(a) && !isNaN(b)){
        return r = a*b;
    } else if(!isNaN(a)){
        return r = a*a;
    } else {
        return r = b*b;
    }
}


function getAndCheck(inputId='') {
    let number = document.getElementById(inputId).value;
    if(number!=='') {
        number = parseInt(number);
        if(!isNaN(number)){
            return number;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}



function isNumberPerfect(n){
    let sum = 0;
    for(let i = 1; i<n; i++) {
        if(n%i===0){
            sum += i;
        }
    }
        return sum===n;
        // if(sum===n){
        //     return true;
        // } else {
        //     return false;
        // }
}

function task6() {
    let num = 0,
    rez = '';
    if(getAndCheck('task_6_number')!==false){
        num = getAndCheck('task_6_number');
    } else {
        return false;
    }
    if(isNumberPerfect(num)){
        rez = `Число ${num} є досконалим`;
    } else {
        rez = `Число ${num} не є досконалим`;
    }
    showResult(rez, 'task_6_result');
}


function task7() {
    let num = 0,
    min = parseInt(document.getElementById('task_7_number1').value),
    max = parseInt(document.getElementById('task_7_number2').value),
    i = min;
    rez = '';
    if(getAndCheck('task_7_number1')!==false && getAndCheck('task_7_number2')!==false){
        min = getAndCheck('task_7_number1');
        max = getAndCheck('task_7_number2');
    } else {
        return false;
    }

    if(diapazon(min, max) === 0) {
        rez = `В діапазоні від ${min} до ${max} — НЕМАЄ досконалих чисел.`
    } else {
        rez = diapazon(min, max);
    }
    showResult(rez, 'task_7_result');
}


function diapazon(a, b){
    debugger
    let r = 0;
    while(a<=b){
        if(isNumberPerfect(a)){
            r = (r+a)+', '
        } 
        a++;
    }
    return r;
}



    //    function task6() {
    //     // debugger;
    //     let num = 0,
    //     rez = '';
    //     if(getAndCheck('task_6_number')!==false){
    //         num = getAndCheck('task_6_number');
    //     } else {
    //         return false;
    //     }
    //     if(isNumberPerfect(num)){
    //         if(lang === 'ua') {
    //             rez = `Число ${num} є досконалим`;
    //         } else {
    //             rez = `Number ${num} is perfect`;
    //         }
    //     } else {
    //         if(lang === 'ua') {
    //             rez = `Число ${num} не є досконалим`;
    //         } else {
    //             rez = `Number ${num} is NOT perfect`;
    //         }        
    //     }
    //     showResult(rez, 'task_6_result');
    // }