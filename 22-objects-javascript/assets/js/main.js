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

