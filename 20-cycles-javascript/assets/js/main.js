function task1() {
    const age = parseInt(document.getElementById('task_1_number').value);
    let rez = '';
    if (isNaN(age) || age < 0 || age > 120) {
        rez = 'Введіть будь ласка числа, або не мінусове або менше 120.';
    } else if (age >= 60) {
        rez = 'Ви — пенсіонер';
    } else if (age >= 18) {
        rez = 'Ви — дорослий';
    } else if (age >= 12) {
        rez = 'Ви — підліток';
    } else if (age <= 11) {
        rez = 'Ви — дитина';
    }
    document.getElementById('task_1_result').innerText = rez;
}

function task2() {
    const num = parseInt(document.getElementById('task_2_number').value);
    let rez = '';
    if (isNaN(num) || num < 0 || num > 9) {
        rez = 'Введіть будь ласка число від 0 до 9.';
    } else {
        switch (num) {
                case 0:
                    rez = ')'
                    break;
                case 1:
                    rez = '!'
                    break;
                case 2:
                    rez = '@';
                    break;
                case 3:
                    rez = '#';
                    break;
                case 4:
                    rez = '$';
                    break;
                case 5:
                    rez = '%';
                    break;
                case 6:
                    rez = '^';
                    break;
                case 7:
                    rez = '&';
                    break;
                case 8:
                    rez = '*';
                    break;
                case 9:
                    rez = '(';
                    break;
                default:
                    rez = 'Введіть повторно'
                    break;
                }
    }
    document.getElementById('task_2_result').innerText = rez;
}


function task3() {
    const num1 = parseInt(document.getElementById('task_3_number1').value);
    const num2 = parseInt(document.getElementById('task_3_number2').value);
    let rez = 0;
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        rez = 'Введіть будь ласка цілі числа.';
    } else {
        const maxNum = num1>num2 ? num1 : num2;
        const minNum = num2<num1 ? num2 : num1;
        for (let i = minNum; i <= maxNum; i++) {
            rez += i;
        }
    }
    document.getElementById('task_3_result').innerText = rez;
}

function task4() {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
    let rez = '';
    const minNum = num1<num2 ? num1 : num2;
    let i = 1;
    let nsd = minNum;
    while (i<=minNum/2){
        if (num1%i==0 && num2%i==0) {
            rez += i+', ';
            nsd = i;
        }
        i++;
    }
    if(minNum===num1) {
        if(num2%num1==0) {
            rez += num1;
            nsd = num1;
        }
    } else {
        if(num1%num2==0) {
            rez += num2; 
            nsd = num2;
        }
    }
    rez = nsd;
    document.getElementById('task_4_result').innerText = rez;
}

function task5() {
    const num = parseInt(document.getElementById('task_5_number').value);
    let rez = '';
    if (isNaN(num) || num < 0) {
        rez = 'Введіть будь ласка цілі числа.';
    } else {
        let i = 1;
        while (i <= num) {
            if (num % i == 0) {
                rez = rez + i+', '
            }
            i++;
        }
    }
    document.getElementById('task_5_result').innerText = rez;
}

function task6() {
    const abcde = parseInt(document.getElementById('task_6_number').value);
    let rez = '';
    const _5Num = abcde%10;
    const _4Num = parseInt(abcde/10%10);
    const _3Num = parseInt(abcde/100%10);
    const _2Num = parseInt(abcde/1000%10);
    const _1Num = parseInt(abcde/10000);
    abcde2edcba = _5Num * 10000 + _4Num * 1000 + _3Num * 100 + _2Num * 10 + _1Num;
    if(abcde == abcde2edcba) {
        rez = 'Це паліндром';
    } else {
        rez = 'Не паліндром';
    }
    document.getElementById('task_6_result').innerText = rez;
}

function task7() {
    const purchaseAmount = parseFloat(document.getElementById('task_7_number').value);
    let rez = 0;
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        rez = `Введіть будь ласка число, і не мінусове і не 0.`;
    } else if (purchaseAmount >= 500) {
        rez = (purchaseAmount * 0.93).toFixed(2);
    } else if (purchaseAmount < 500 && purchaseAmount > 300) {
        rez = (purchaseAmount * 0.95).toFixed(2);
    } else if (purchaseAmount <= 300 && purchaseAmount >= 200) {
        rez = (purchaseAmount * 0.97).toFixed(2);
    } else {
        rez = purchaseAmount.toFixed(2);
    }
    document.getElementById('task_7_result').innerText = rez;
}



function task8 () {
    let dodatni = 0,
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0,
        result = '',
        number = 0,
        allNumbers = '',
        i = 0;
    const limit = 10;
    while(i < limit) {
        number = parseInt(prompt('Enter number'));
        if(!isNaN(number)) {
            allNumbers += number+', ';
            if(number === 0){
                nuli++;
            } else {
                if(number > 0) {
                    dodatni++;
                } else {
                    videmni++;
                }
            }
            if(number%2===0) {
                parni++;
            } else {
                neparni++;
            }
            i++;
        }
    }
    result = `Додатні: ${dodatni}, Від'ємні: ${videmni}, Нулі:${nuli}, Парні:${parni}, Непарні: ${neparni}`;
    document.getElementById('task_8_result').innerHTML = allNumbers+'<br>'+result;
}




    function task9() {
        let dayWeek = new Date().getDay();
        let d = dayWeek;
        let answer = true;
        while(answer === true) {
            switch(d) {
                case 1:
                    dayWeek = 'Понеділок'
                    d ++;
                    break;
                case 2:
                    dayWeek = 'Вівторок'
                    d ++;
                    break;
                case 3:
                    dayWeek = 'Середа'
                    d ++;
                    break;
                case 4:
                    dayWeek = 'Четвер'
                    d ++;
                    break;
                case 5:
                    dayWeek = 'Пятниця'
                    d ++;
                    break;
                case 6:
                    dayWeek = 'Субота'
                    d ++;
                    break;
                case 7:
                    dayWeek = 'Неділя'
                    d = 1;
                    break;
                }
            answer = confirm(`День тижня: ${dayWeek}. Хочеш побачити наступний день?`);
        }
    }
         
    function task10() {
        let num = 0;
        let zero = 0;
        let high = 100;
        let error;
        let N;
            while (N !== '=') {
                N = Math.round((zero+high) / 2);
                let sign = prompt(`Число яке ви загадали — воно більше \>, меньше \<, чи дорівнює \= ${N}? Натисныть один ыз цих трьох знаків: \">\" \"<\" \"=\"`);
                switch(sign) {
                    case '=':
                        alert(`УРА, Ви загадали ${N}`);
                        N = '=';
                        break;
                    case '>':
                        zero = N;
                        break;
                    case '<':
                        high = N;
                        break;
                }
            }  
    }


    function task11() {
        let rez = '<div style="display:flex;flex-wrap:wrap;gap:30px;">';
        for (let num = 2; num <= 9; num++) {
            rez += '<ul>';
            for (let i = 1; i <= 10; i++) {
                rez += '<li>' + num + ' * ' + i + ' = ' + (num*i) + '</li>';
            }
            rez += '</ul>';
        }
        rez += '</div>';
        document.getElementById('task_11_result').innerHTML = rez;
    }

    function task12(){
        debugger;
        let day = parseInt(prompt('Введіть день'));
        let month = parseInt(prompt('Введіть місяць'));
        let year = parseInt(prompt('Введіть рік'));
        let rez = 0;
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            rez = 'Введіть будь ласка цілі числа.';
        } else {
            let checkMonth;
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    checkMonth = '31'
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    checkMonth = '30';
                    break;
                case 2:
                    checkMonth = '28';
                    let chekLeapYear;
                    if (year%400===0 || (year%4===0 && year%100!==0)) {
                        checkMonth = '29';
                    } 
                    break;
                default:
                    checkMonth = 'Invalid month'
                    break;
            }
            if (month == 12 && day == 31){
                year++
                month = 1;
                day = 1;
            }   else if (day == checkMonth){
                month++;
                day = 1;
            } else if (day < checkMonth ){
                day++;
            }
            rez = day+'\/'+month+'\/'+year;
            document.getElementById('task_12_result').innerHTML = rez;
        }
    }



    // function isLeapYear(year) {
//     if (year%400===0 || (year%4===0 && year%100!==0)) {
//         return true;
//     } else {
//         return false;
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

        