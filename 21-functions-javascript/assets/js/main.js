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
    rez = `Факторіалом числа ${num} буде: ${rez}`;
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
    let num1 = parseInt(document.getElementById('task_5_number1').value),
        num2 = parseInt(document.getElementById('task_5_number2').value);
    rez = '';
    rez = square(num1, num2);
    rez = `Площа буде = ${rez}`;
    showResult(rez, 'task_5_result');
}

function square(a, b){
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
    checkRez = 0,
    i = min;
    rez = '';
    if(getAndCheck('task_7_number1')!==false && getAndCheck('task_7_number2')!==false){
        min = getAndCheck('task_7_number1');
        max = getAndCheck('task_7_number2');
    } else {
        return false;
    }

    checkRez = diapazon(min, max);

    if(checkRez === 0) {
        rez = `В діапазоні від ${min} до ${max} — НЕМАЄ досконалих чисел.`
    } else {
        rez = `В діапазоні від ${min} до ${max} досконалими є: ${checkRez}.`
    }
    showResult(rez, 'task_7_result');
}


function diapazon(a, b){
    let r = 0;
    while(a<=b){
        if(isNumberPerfect(a)){
            r = (r+a)+', '
        } 
        a++;
    }
    return r;
}


