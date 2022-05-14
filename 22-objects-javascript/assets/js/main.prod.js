"use strict";var car={mark:"Ford",model:"Shelby Mustang GT500",year:2010,speed:330,tank:59,"Fuel Consumption":16.3,drivers:["Serhii","Bob","Arthur"],"Car Refueling":"Yes"};function infoCar(){var e="";for(var r in e+="<ul>",car)e+="<li>"+r+": "+car[r]+",</li>";return e+="</ul>"}function task1(){showResult(infoCar(),"task_1_result")}function checkStrValue(e){return""!==e&&(!!isNaN(e)&&e)}function task2(){var e=checkStrValue(document.getElementById("task_2").value);showResult(!1===e?"Enter driver":(newDriver(e),driversInfo()),"task_2_result")}function newDriver(e){return rez=car.drivers.push(e),rez}function driversInfo(){var e="";for(var r in e+="<ul>",car.drivers)e+="<li>"+r+": "+car.drivers[r]+",</li>";return e+="</ul>"}function showResult(e,r){document.getElementById(r).innerHTML=e}function task3(){select=checkStrValue(document.getElementById("car_refueling").value);checkRefueling(select),showResult(refuelingInfo(),"task_3_result")}function checkRefueling(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return car["Car Refueling"]="false"===e?"No":"Yes"}function refuelingInfo(){return rez=car["Car Refueling"]}function task4(){distance=checkFloatValue(document.getElementById("task_4_1").value),averageSpeed=checkFloatValue(document.getElementById("task_4_2").value),driverName=checkStrValue(document.getElementById("task_4_3").value);var e,r="";showResult(r=!1!==distance&&!1!==averageSpeed&&!1!==checkStrValue?(e=checkBreak(r=whatDriveTime(distance,averageSpeed)),chDrive=checkDriver(driverName),chFu=checkFuel(distance,car.tank,car["Fuel Consumption"]),sumTime=parseFloat(r)+parseFloat(e),!0===chDrive?"You spend (".concat(r,"+").concat(e,") = ").concat(sumTime," год. and <br> ").concat(chFu):"Driver is not define"):"Enter correct values","task_4_result")}function checkFloatValue(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return""!==e&&(e=parseFloat(e),!(isNaN(e)||e<0)&&e)}function whatDriveTime(){return t=((0<arguments.length&&void 0!==arguments[0]?arguments[0]:0)/(1<arguments.length&&void 0!==arguments[1]?arguments[1]:0)).toFixed(2)}function checkBreak(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return parseInt(e/4)}function checkDriver(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];for(var r in car.drivers)if(e===car.drivers[r])return!0}function checkFuel(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return oneMove=100*(1<arguments.length&&void 0!==arguments[1]?arguments[1]:0)/(2<arguments.length&&void 0!==arguments[2]?arguments[2]:0),rez=oneMove<=e?(refuel=parseInt(e/oneMove),"You will not have a full tank for this trip. You need to refuel ".concat(refuel," times")):"You will have enough full tank for this trip",rez}var time={hours:20,minutes:59,seconds:45};function task5(){showResult(infoTime(),"task_5_result")}function infoTime(){var e="";for(var r in e+="<ul>",time)e+="<li>"+r+": "+time[r]+"</li>";return e+="</ul>"}function task6(){var e=parseInt(document.getElementById("task_6_from").value),r=parseInt(document.getElementById("task_7_from").value),t=parseInt(document.getElementById("task_8_from").value),n="",a=timeFirstInSec(time.hours,time.minutes,time.seconds),e=checkIsNan(e),r=checkIsNan(r),t=checkIsNan(t),n=isNaN(e)&&isNaN(r)&&isNaN(t)?"Введіть коректне число (більше 0)":(rezHr=findHr(n=a+3600*t+60*r+e),rezMin=findMin(n,rezHr),rezSec=findSec(n,rezHr),rezHr+" : "+rezMin+" : "+rezSec);document.getElementById("task_6_result").innerText=n}function timeFirstInSec(e,t,n){return r=3600*e+60*t+n,r}function addZero(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return e<10?"0"+e:""+e}function checkIsNan(e){return isNaN(e)&&(e=0),e}function findHr(e){return addZero(Math.floor(e/3600))}function findMin(e,r){return addZero(Math.floor(e/60)-60*r)}function findSec(e,r){return addZero((e-3600*r)%60)}