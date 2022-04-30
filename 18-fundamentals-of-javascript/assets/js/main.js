function yourName() {
    const yorName = prompt("Введи своє ім\'я:");
    alert(`Привіт, ${yorName}`);
}

function yourAge() {
    const yourYearBirth = parseInt(prompt("Введи свій рік народження:"));
    const currentYear = 2022;
    const yourAge = currentYear - yourYearBirth;
    if (yourAge >= 0) {
        alert(`Вітаю! Тобі — ${yourAge} роки(ів)`)
    } else {
        alert(`Пробачте! Але ви ввели рік, який ще не настав :)`)
    }
    
}

function squarePerimeter() {
    const sideLength = parseFloat(prompt("Введи довжину сторони квадрату:"));
    const perimeter = 4 * sideLength;
    if (perimeter > 0) {
        alert(`Периметр квадрату буде дорівнювати ${perimeter}`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатнє");
    }
}

function circleArea() {
    const circleRadius = parseFloat(prompt("Введи радіус кола:"));
    const PI = Math.PI;
    const circleArea = PI * circleRadius**2;
    if (circleRadius > 0) {
        alert(`Площа кола дорівнює: ${circleArea}`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатнє");
    }
}

function speed() {
    const distance = parseFloat(prompt("Введи відстань в км\. між двума містами:"));
    const time = parseFloat(prompt("Введи, за скільки годин хочеш туди дістатися?:"));
    const speed = distance / time;
    if (distance > 0 && time > 0) {
        alert(`Швидкість, з якою тобі треба рухатися = ${speed} км\/год\.`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатні числа для двох значень одночасно");
    }
}
function usd2eur() {
    const USD = parseFloat(prompt("Введи доллари:"));
    const K = 0.9429;
    const EUR = USD * K;
    if (USD > 0) {
        alert(`В Євро це буде: ${EUR} \(EUR\)`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатні числа для двох значень одночасно");
    }
}

function lastToFirst() {
    const abcde = parseInt(prompt("Введіть п\'ятизначне число:"));
    const lastNumber = abcde%10;
    const firstFourFloat = abcde/10;
    const firstFourInt = parseInt(firstFourFloat);
    const lastToFirst = lastNumber * 10000 + firstFourInt;
    alert(`Остання цифра переміщається вперед. Результат — ${lastToFirst}`);
}


function salary() {
    const salesAmount = parseFloat(prompt("Введіть суму продаж робітника, за місяць в USD:"));
    const RATE = 250;
    const salary = RATE+salesAmount*0.1;
    if (salesAmount > 0) {
        alert(`Зарплата робітника буде: ${salary} \(USD\)`);
    } else {
        alert(`Ви не зробили ніякого об\'єму продаж, тож отримаєте лише ставку: ${RATE} \(USD\)`);
    }
}