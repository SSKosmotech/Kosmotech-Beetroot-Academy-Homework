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

// function task8() {
//     let i = 0;
//     while (i < 9) {
//         const num = document.getElementById('task_8_number').value;
//     }

//     document.getElementById('task_8_result').innerText = num;
// }







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
// console.log(summa2);
// resultText(123;)


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

// console.log(sum2(1,5));

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
* 3. Не повинна мати побічних ефектів (не повинна викликати в собі побічну функцію), console.log() - це і є використання побічної функції !!!
* 
* 
* 
* ФУНКЦІЇ ВИЩОГО ПОРЯДКУ (або, чи)
* 1. Функція приймає в якості аргументу іншу функцію
* 2. Функція повертає в якості результату виконання іншуфнкцію
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


// function getAndCheck(inputId='') {
//     // debugger;
//     let number = document.getElementById(inputId).value;
//     if(number!=='') {
//         number = parseInt(number);
//         if(!isNaN(number)){
//             return number;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

// function showResult(result, whereId) {
//     document.getElementById(whereId).innerHTML = result;
// }

// function isNumberPerfect(n){
//     let sum = 0;
//     for(let i = 1; i<n; i++) {
//         if(n%i===0){
//             sum += i;
//         }
//     }
//         return sum===n;
// }

// function task111() {
//     // debugger;
//     let num = 0,
//     rez = '';
//     if(getAndCheck('task_111_number')!==false){
//         num = getAndCheck('task_111_number');
//     } else {
//         return false;
//     }
//     if(isNumberPerfect(num)){
//         rez = `Число ${num} є досконалим`;
//     } else {
//         rez = `Число ${num} не є досконалим`;
//     }
//     showResult(rez, 'task_111_result');
// }

// function task111() {
    // function task111(lang = 'ua') {

    //     // debugger;
    //     let num = 0,
    //     rez = '';
    //     if(getAndCheck('task_111_number')!==false){
    //         num = getAndCheck('task_111_number');
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
    //     showResult(rez, 'task_111_result');
    // }


    // <<=====================================================>>

    // const obj = new Object();

    // const obj2 = {};



    // const cassets = undefined;

    // const car1 = {
    //     mark: 'Tesla', //ключ: значення
    //     model: 'S',
    //     year: 2020,
    //     'engine Type': 'electro',
    //     capacity: 100.3,
    //     autoPilot: true,
    //     color: 'black',
    //     '12': 123456789,
    //     cassets, // так можна, якщо зверху ініціалізувати цю змінну const cassets = undefined;
    //     viewMark: function(){
    //         console.log(this);
    //         console.log(this.mark);
    //     },
    //     // viewMark: ()=>{
    //     //     console.log(this);
    //     //     console.log(this.mark);
    //     // },
    //     size: {
    //         length: 4976,
    //         width: 1963,
    //         height: 1435
    //     },
    //     versions: ['75', '75D', '100D', 'P100D']
    // };

    
    // // car.maxSpeed = 250;
    // // car['max Speed'] = 250;
    // car['max-Speed'] = 250;

    // car.color = 'pink';

    // car.size.additional = {
    //     foo: 'bar',
    //     myFunc(){
    //         alert('hello');
    //     }
    // }

    // const sizes = car.size;

    // console.log(car);
    // console.log(car.mark);
    // // console.log(car['mark']); // альтернативний варіант виклику описаному на крок хверху
    // console.log(car['engine Type']);
    // console.log(car[12]);
    // console.log(car.size.height);
    // console.log(sizes.height); //виводимо верхнє, з новоствореного об'єкта
    // console.log(car.versions);
    // car.viewMark();

    // // car.size.additional.myFunc(); //Hello

    // const good = {
    //     name: 'Ice cream',
    //     weight: 100,
    //     best: true,
    //     description: '<p class="text-success">Best of the best!!!</p>',
    //     price: 25.50
    // }

    // const goodHTML = `
    //     <div class="good">
    //         <h4>${good.name}</h4>
    //         <p>Ціна: ${good.price}</p>
    //     </div>
    // `;

    // //document.getElementById('task_111_result').innerHTML = good.description;  
    // document.getElementById('task_111_result').innerHTML = goodHTML;  


    // delete(car.model);
    // delete(car.size.length);
    
    // const clothes = {
    //     type: 't-shirt',
    //     size: 'XXL',
    //     color: 'grey',
    //     neck: 'V'
    // }

    // const clothes2 = {
    //     type: 'pents',
    //     size: '36',
    //     color: 'blue'
    // }

    // // if(clothes.type === 't-shirt')


    // for(let key in car1){
    //     console.log(key+': '+car1[key]);
    // }




    // const a = {
    //     aa: 1,
    //     bb: {
    //         cc: 3
    //     }
    // }

    // // const b = a;
    // // const b = Object.assign({}, a);
    // const b = JSON.parse(JSON.stringify(a)); //метод глибокого копіювання, але не працює, якщо є функція в об'єкті, тому функції краще не використовувати


    // b.aa = 2;
    // b.bb.cc = 4;
    // console.log(a.aa, b.aa);
    // console.log(a.bb.cc, b.bb.cc);




// <<====================================>>


// function showLength(){
//     return arguments.length;
// }
    

// function task1() {
//     let rez = '';
//     rez = `Посилання на функцію, яка буде виводити кількість переданиї їй аргументів: ${showLength}`;
//     showResult(rez, 'task_1_result');
// }


// function task2() {
//     let rez = 0;
//     let num1 = parseFloat(document.getElementById('task_2_number1').value);
//     let num2 = parseFloat(document.getElementById('task_2_number2').value);
//     rez = check2Num(num1, num2);
//     showResult(rez, 'task_2_result');
// }

// function check2Num (a, b) {
//     let r = 0;
//     if(a<b){
//         return r = -1;
//     } else if(a>b) {
//         return r = 1;
//     } else if(a===b){
//         return r = 0;
//     }
// }


// function task3() {
//     let rez = 0;
//     let num = parseInt(document.getElementById('task_3_number').value);
//     rez = factorial(num);
//     rez = `Факторіалом числа ${num} буде: ${rez}`;
//     showResult(rez, 'task_3_result');
// }

// function factorial(x){
//     let f = 1;
//     for(let i=1;i<=x;i++){
//         f *= i;
//     }
//     return f;
// }
// //5! = 1 * 2 * 3 * 4 * 5 //факторіал


// function task4() {
//     let num1 = parseInt(document.getElementById('task_4_number1').value),
//         num2 = parseInt(document.getElementById('task_4_number2').value),
//         num3 = parseInt(document.getElementById('task_4_number3').value);
//     rez = '';
//     if(getAndCheck('task_4_number1')!==false && getAndCheck('task_4_number2')!==false || getAndCheck(task_4_number3)!==false){
//         num1 = getAndCheck('task_4_number1');
//         num2 = getAndCheck('task_4_number2');
//         num3 = getAndCheck('task_4_number3');
//     } else {
//         return false;
//     }
//     rez =convertToNumber(num1, num2, num3);
//     showResult(rez, 'task_4_result');
// }

// function convertToNumber(a, b, c) {
//     let r = 0;
//     return r =  Number(`${a}${b}${c}`);
// }


// function task5() {
//     let num1 = parseInt(document.getElementById('task_5_number1').value),
//         num2 = parseInt(document.getElementById('task_5_number2').value);
//     rez = '';
//     rez = square(num1, num2);
//     rez = `Площа буде = ${rez}`;
//     showResult(rez, 'task_5_result');
// }

// function square(a, b){
//     let r;
//     if(!isNaN(a) && !isNaN(b)){
//         return r = a*b;
//     } else if(!isNaN(a)){
//         return r = a*a;
//     } else {
//         return r = b*b;
//     }
// }


// function getAndCheck(inputId='') {
//     let number = document.getElementById(inputId).value;
//     if(number!=='') {
//         number = parseInt(number);
//         if(!isNaN(number)){
//             return number;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

// function showResult(result, whereId) {
//     document.getElementById(whereId).innerHTML = result;
// }



// function isNumberPerfect(n){
//     let sum = 0;
//     for(let i = 1; i<n; i++) {
//         if(n%i===0){
//             sum += i;
//         }
//     }
//         return sum===n;
//         // if(sum===n){
//         //     return true;
//         // } else {
//         //     return false;
//         // }
// }

// function task6() {
//     let num = 0,
//     rez = '';
//     if(getAndCheck('task_6_number')!==false){
//         num = getAndCheck('task_6_number');
//     } else {
//         return false;
//     }
//     if(isNumberPerfect(num)){
//         rez = `Число ${num} є досконалим`;
//     } else {
//         rez = `Число ${num} не є досконалим`;
//     }
//     showResult(rez, 'task_6_result');
// }


// function task7() {
//     let num = 0,
//     min = parseInt(document.getElementById('task_7_number1').value),
//     max = parseInt(document.getElementById('task_7_number2').value),
//     checkRez = 0,
//     i = min;
//     rez = '';
//     if(getAndCheck('task_7_number1')!==false && getAndCheck('task_7_number2')!==false){
//         min = getAndCheck('task_7_number1');
//         max = getAndCheck('task_7_number2');
//     } else {
//         return false;
//     }

//     checkRez = diapazon(min, max);

//     if(checkRez === 0) {
//         rez = `В діапазоні від ${min} до ${max} — НЕМАЄ досконалих чисел.`
//     } else {
//         rez = `В діапазоні від ${min} до ${max} досконалими є: ${checkRez}.`
//     }
//     showResult(rez, 'task_7_result');
// }


// function diapazon(a, b){
//     let r = 0;
//     while(a<=b){
//         if(isNumberPerfect(a)){
//             r = (r+a)+', '
//         } 
//         a++;
//     }
//     return r;
// }


// <<====================================>>

// function sum(a = 0, b = 0){
//     return a + b;
//     // document.getElementById('rez').innerText = 'сума: '+(a+b); // так функція не буде чистою
// }

// const s = sum(10, 20);


// рекурсивні функції (в своєму тілі викликає сама себе) (потрібно умова виходу з рекурсії). Використовуємо, коли не знаємо яка кількісь дочірніх підкатегорій може бути.
// let count = 0;

// function myFunc(){
//     console.log('call');
//     count++;
//     const text = prompt('Question?');
//     alert(text);
//     if (text !== ''){
//         myFunc();
//     }
//     console.log(count);
//     return
// }

// myFunc();

// function schoTamScho(){

// }

// function checkNewOrders(){
//     setTimeout(function(){
//         checkNewOrders();
//     }, 30000);
// }

// checkNewOrders();


// IIFE (функції з миттєвим викликом), на співбесідах питають IIFE (Immediately Invoked Function Expression)

// (function(){
//     console.log('Hello');
// })();


// 
// const obj = {
//     name: 'Vasya',
//     // age: 25
//     qqq: {
//         aaa: '35'
//     }
// }

// if(obj.hasOwnProperty('age')){ // Перевірка, чи існує властивість "age"
// // if(obj.qqq.hasOwnProperty('aaa')){ // Перевірка, чи існує властивість "age"
//     console.log(obj.age);
// }else{
//     console.log('obj.age has no "age" property');
// }

// const nameKey = 'name';

// const obj = {
//     name: 'Vasya',
//     age: 25
// }

// Object.freeze(obj);

// obj.age = 35;
// obj.gender = 'male';

// console.log(Object.isFrozen(obj));

// console.log(obj);

// console.log(obj[nameKey]);

// for(let k in obj){
//     console.log(k+': '+obj[k]);
// }

// console.log(obj[nameKey]);

// if(obj.hasOwnProperty(nameKey)){
//     console.log(obj[nameKey]);
// }

// Math.pow();
// Date.now();

// new Date().getFullYear() // 2022


// Четные, нечетные выводит из указаного диапазона

// function filterRangeNumbers(from = 0, to = 10, isEven = true){
//     let result = '';
//     // let forFrom = from < to ? from : to;
//     if(from < to){
//         for(let i = from; i <= to; i++){
//             if(isEven){
//                 if(i%2  === 0){
//                     result += i+' ';
//                 }
//             }else{
//                 if(i%2 !== 0){
//                     result += i+' ';
//             }
//             }
//         }
//     }// }else{
//     //     for(let i = from; i >= to; i--){
//     //         if(isEven){
//     //             if(i%2  === 0){
//     //                 result += i+' ';
//     //             }
//     //         }else{
//     //             if(i%2 !== 0){
//     //                 result += i+' ';
//     //             }
//     //         }
//     //     }
//     // }
//     return result;
// }


// function checkIntValue(value){
//     if(value===''){
//         return false
//     }
//     value = parseInt(value)
//     if(isNaN(value) || value < 0){
//         return false
//     }
//     return value;
// }

// const showResult = (rez, resId) => {
//     document.getElementById('task_1_result').innerText = rez;
// }

// console.log(filterRangeNumbers(10, 20, false)) ;

// function task1(){
//     const fromValue = checkIntValue(document.getElementById('task_1_from').value),
//             toValue = checkIntValue(document.getElementById('task_1_to').value),
//             type = document.getElementById('numbers_type').value
//     let rez = '';

//     if(fromValue !== false && toValue !== false){
//         if(fromValue < toValue){
//             rez = filterRangeNumbers(fromValue, toValue, Boolean(type))
//         }else{
//             rez = 'From must be smaller than to';
//             // rez = filterRangeNumbers(fromValue, toValue, Boolean(type))
//         }
//     }else{
//         rez = 'Enter range with correct values';
//     }
//     showResult(rez, 'task_1_result');
// }


// let obj = {
//     name: 'Vasya',
//     sayHello: function(){
//         alert('Hello '+this.name)
//     }
//     // this.driver = //може їхати
// }

// obj.sayHello();
// // obj.sayHello('Bob');

// <<=============================Minimum=============================>>

const car = {
    mark: 'Ford',
    model: 'Shelby Mustang GT500',
    year: 2010,
    speed: 330,
    tank: 59,
    'Fuel Consumption': 16.3,
    drivers: ['Serhii', 'Bob', 'Arthur'],
    'Car Refueling': 'Yes'
}

function infoCar() {
    let rez = '';
    rez += '<ul>';
    for(let key in car){
        // alert(key+': '+car[key]);
        rez += '<li>'+key+': '+car[key]+','+'</li>'
    }
    rez += '</ul>';
    return rez;
} 

function task1(){
    let r = infoCar();
    showResult(r, 'task_1_result');
}





function checkStrValue(value){
    if(value===''){
        return false
    }
    if(!isNaN(value)){
        return false
    }
    return value;
}

function task2(){
    let driver = checkStrValue(document.getElementById('task_2').value);
    let r = '';
    if(driver === false) {
        r = `Enter driver`;
    }else{
        newDriver(driver);
        r = driversInfo();
    }
    showResult(r, 'task_2_result');
}

function newDriver(value){
    rez = car.drivers.push(value);
    return rez;
}

function driversInfo() {
    let rez = '';
    rez += '<ul>';
    for(let key in car.drivers){
        rez += '<li>'+key+': '+car.drivers[key]+','+'</li>'
    }
    rez += '</ul>';
    return rez;
} 

function showResult (rez, resId) {
    document.getElementById(resId).innerHTML = rez;
}

function task3(){
    select = checkStrValue(document.getElementById('car_refueling').value);
    let r = '';
    checkRefueling(select);
    r = refuelingInfo();
    showResult(r, 'task_3_result');
}

function checkRefueling(a = false){
    if(a === "false") {
        return car['Car Refueling'] = "No" ;
    }else{
        return car['Car Refueling'] = "Yes" ;
    }
}

function refuelingInfo(){
    return rez = car['Car Refueling'];
}


function task4(){
    distance = checkFloatValue(document.getElementById('task_4_1').value);
    averageSpeed = checkFloatValue(document.getElementById('task_4_2').value);
    driverName = checkStrValue(document.getElementById('task_4_3').value);
    let r = '';
    if(distance !== false && averageSpeed !== false && checkStrValue !== false){
        r = whatDriveTime(distance, averageSpeed);
        const b = checkBreak(r);
        chDrive = checkDriver(driverName);
        chFu = checkFuel(distance, car.tank, car['Fuel Consumption']);
        sumTime = parseFloat(r) + parseFloat(b);
        if(chDrive === true){
            r = `You spend (${r}+${b}) = ${sumTime} год. and <br> ${chFu}`;
        }else{
            r = 'Driver is not define';
        }
    }else{
        r = 'Enter correct values';
    }
    showResult(r, 'task_4_result');
}


function checkFloatValue(value = true){
    if(value===''){
        return false
    }
    value = parseFloat(value)
    if(isNaN(value) || value < 0){
        return false
    }
    return value;
}

function whatDriveTime(d = 0, s = 0){
    return t = (d / s).toFixed(2);
}

function checkBreak(t = 0){
    return t = parseInt(t / 4);
}

function checkDriver(N = false){
    for(let key in car.drivers){
        if(N === car.drivers[key]){
            return true;
        }
    }
}

function checkFuel(dist = 0, tank = 0, fuelCons = 0){
    oneMove = tank * 100 / fuelCons;
    if(oneMove <= dist){
        refuel = parseInt(dist / oneMove);
        rez = `You will not have a full tank for this trip. You need to refuel ${refuel} times`
    }else{
        rez = `You will have enough full tank for this trip`
    }
    return rez;
}

// <<=============================Norma=============================>>


const time = {
    hours: 20,
    minutes: 59,
    seconds: 45
}

function task5(){
    let r = infoTime();
    showResult(r, 'task_5_result');
}

function infoTime() {
    let rez = '';
    rez += '<ul>';
    for(let key in time){
        rez += '<li>'+key+': '+time[key]+'</li>'
    }
    rez += '</ul>';
    return rez;
} 


function task6() {
    let sec = parseInt(document.getElementById('task_6_from').value),
        min = parseInt(document.getElementById('task_7_from').value),
        hr = parseInt(document.getElementById('task_8_from').value);
    let rez = '';

    let timeSec = timeFirstInSec(time.hours, time.minutes, time.seconds);
    
    sec = checkIsNan(sec);
    min = checkIsNan(min);
    hr = checkIsNan(hr);

    if(!isNaN(sec) || !isNaN(min) || !isNaN(hr) ){
        rez = timeSec+hr*3600+min*60+sec;
        rezHr = findHr(rez);
        rezMin = findMin(rez, rezHr);
        rezSec = findSec(rez, rezHr);
        rez = rezHr+' : '+rezMin+' : '+rezSec
    }else{
        rez = `Введіть коректне число (більше 0)`;
    }
    document.getElementById('task_6_result').innerText = rez;
}

function timeFirstInSec(h, m, s){
    r = h*3600+m*60+s;
    return r;
}

function addZero(n=0) {
    let r = '';
    if(n<10){
        r = '0'+n
    } else {
        r = ''+n
    }
    return r;
}

function checkIsNan(x){
    if(isNaN(x)){
        x = 0;
    }
    return x;
}

function findHr(r){
    return addZero(Math.floor(r/3600));
}

function findMin(r, rHr){
    return addZero(Math.floor(r/60)-rHr*60);
}

function findSec(r, rHr){
    return addZero((r-rHr*3600)%60);
}




/////////////////////////////////дроби////////////////////////////////
const drobb = {
    value1: {
        ch: 0,
        zn: 0
    },
    value2: {
        ch: 0,
        zn: 0
    },
    setValue: function (key, chisl, znam){
        this[key].ch = chisl;
        this[key].zn = znam;
        // this[key] = {
        //     ch: chisl,
        //     zn: znam
        // }
    },
    multiply: function(){
        const result = {
            ch: this.value1.ch * this.value2.ch,
            zn: this.value1.zn * this.value2.zn
        };
        return this.short(result);
    },
    divide: function(){
        const result = {
            ch: this.value1.ch * this.value2.zn,
            zn: this.value1.zn * this.value2.ch
        };
        return this.short(result);
    },
    addition: function(){
        let commonDenominator = 0;
        let commonChislitel = 0;
        let nzd = 0;
        if(this.value1.zn==this.value2.zn){
            commonChislitel = this.value1.ch + this.value2.ch;
            commonDenominator = this.value1.zn;
        }else{
            nzd = findNzd(this.value1.zn, this.value2.zn);
            commonDenominator = findCommonDenominator(this.value1.zn, this.value2.zn, nzd);
            commonChislitel = additionalMultiplier(commonDenominator, this.value1.zn, this.value1.ch) + additionalMultiplier(commonDenominator, this.value2.zn, this.value2.ch);
        }
        const result = {
                ch: commonChislitel,
                zn: commonDenominator
            };
        
        return this.short(result);
    },
    subtraction: function(){
        let commonDenominator = 0;
        let commonChislitel = 0;
        let nzd = 0;
        if(this.value1.zn==this.value2.zn){
            commonChislitel = this.value1.ch - this.value2.ch;
            commonDenominator = this.value1.zn;
        }else{
            nzd = findNzd(this.value1.zn, this.value2.zn);
            commonDenominator = findCommonDenominator(this.value1.zn, this.value2.zn, nzd);
            commonChislitel = additionalMultiplier(commonDenominator, this.value1.zn, this.value1.ch) - additionalMultiplier(commonDenominator, this.value2.zn, this.value2.ch);
        }
        const result = {
                ch: commonChislitel,
                zn: commonDenominator
            };
        
        return this.short(result);
    },
    short: function(rez){
        //TODO: знайти найбільший загальний дільник (якщо він є, то ділимо на нього і повертаємо результат)
        let nzd = {};

        nzd = findNzd(rez.ch, rez.zn);

        // if(rez.ch%rez.zn===0){
        if(nzd !== 0){
            // return rez.ch / rez.zn;
            return {
                ch: rez.ch / nzd,
                zn: rez.zn / nzd
            };
        }else{
            return rez;
        }
    }
}

function findNzd(ch, zn){
    let nzd = 0;
    if(ch < 0){
        ch = ch * -1;
    }
    for(let i = Math.min(ch, zn); i > 0; i--){
        if(ch % i === 0 && zn % i === 0){
            nzd = i;
            break;
        }
    }
    return nzd;
}

function additionalMultiplier(commDenom, zn, ch){
    return (commDenom / zn) * ch;
}

function findCommonDenominator(zn1, zn2, nzd){
    return zn1 * zn2 / nzd;
}



// drobb.setValue('value1', 1, 2);
// drobb.setValue('value2', 3, 12);
// drobb.setValue('value3', 4, 6);
 
function task9(){
    debugger
    let ch1 = checkIntValue(document.getElementById('task_9_from').value),
        zn1 = checkIntValue(document.getElementById('task_10_from').value),
        ch2 = checkIntValue(document.getElementById('task_11_from').value),
        zn2 = checkIntValue(document.getElementById('task_12_from').value),
        type = document.getElementById('type_action').value,
        rez = {};
       
    drobb.setValue('value1', ch1, zn1);
    drobb.setValue('value2', ch2, zn2);
 
    if(ch1 !== false && ch2 !== false && zn1 !== false && zn2 !== false){
        switch(type){
            case 'add_drobb':
                rez = drobb.addition();
                break;
            case 'minus_drobb':
                rez = drobb.subtraction();
                break;
            case 'multiply_drobb':
                rez = drobb.multiply();
                break;
            case 'divide_drobb':
                rez = drobb.divide();
                break;
        }
    }else{
        rez = 'Введіть цілі числа';
    }

debugger
    document.getElementById('task_9_result').innerHTML = rez.ch;
    document.getElementById('task_10_result').innerHTML = rez.zn;
}
 
function checkIntValue(value){
    if(value===''){
        return false
    }
    value = parseInt(value)
    if(isNaN(value) || value < 0){
        return false
    }
    return value;
}
 
const multip = drobb.multiply();
console.log('=======multiply========');
console.log(multip);
 
const div = drobb.divide();
console.log('=======divide========');
console.log(div);
 
const add = drobb.addition();
console.log('=======addition========');
console.log(add);
 
/////////////////////////////////дроби////////////////////////////////


