"use strict";function task1(){var e=parseInt(document.getElementById("task_1_number").value),t="";isNaN(e)||e<0||120<e?t="Введіть будь ласка числа, або не мінусове або менше 120.":60<=e?t="Ви — пенсіонер":18<=e?t="Ви — дорослий":12<=e?t="Ви — підліток":e<=11&&(t="Ви — дитина"),document.getElementById("task_1_result").innerText=t}function task2(){var e=parseInt(document.getElementById("task_2_number").value),t="";if(isNaN(e)||e<0||9<e)t="Введіть будь ласка число від 0 до 9.";else switch(e){case 0:t=")";break;case 1:t="!";break;case 2:t="@";break;case 3:t="#";break;case 4:t="$";break;case 5:t="%";break;case 6:t="^";break;case 7:t="&";break;case 8:t="*";break;case 9:t="(";break;default:t="Введіть повторно"}document.getElementById("task_2_result").innerText=t}function task3(){var e=parseInt(document.getElementById("task_3_number1").value),t=parseInt(document.getElementById("task_3_number2").value),a=0;if(isNaN(e)||isNaN(t)||e<0||t<0)a="Введіть будь ласка цілі числа.";else for(var n=t<e?e:t,s=t<e?t:e;s<=n;s++)a+=s;document.getElementById("task_3_result").innerText=a}function task4(){for(var e=parseInt(document.getElementById("task_4_number1").value),t=parseInt(document.getElementById("task_4_number2").value),a="",n=e<t?e:t,s=1,r=n;s<=n/2;)e%s==0&&t%s==0&&(a+=s+", ",r=s),s++;n===e?t%e==0&&(a+=e,r=e):e%t==0&&(a+=t,r=t),a=r,document.getElementById("task_4_result").innerText=a}function task5(){var e=parseInt(document.getElementById("task_5_number").value),t="";if(isNaN(e)||e<0)t="Введіть будь ласка цілі числа.";else for(var a=1;a<=e;)e%a==0&&(t=t+a+", "),a++;document.getElementById("task_5_result").innerText=t}function task6(){var e=parseInt(document.getElementById("task_6_number").value),t="",a=e%10,n=parseInt(e/10%10),s=parseInt(e/100%10),r=parseInt(e/1e3%10),c=parseInt(e/1e4);abcde2edcba=1e4*a+1e3*n+100*s+10*r+c,t=e==abcde2edcba?"Це паліндром":"Не паліндром",document.getElementById("task_6_result").innerText=t}function task7(){var e=parseFloat(document.getElementById("task_7_number").value),t=0,t=isNaN(e)||e<=0?"Введіть будь ласка число, і не мінусове і не 0.":500<=e?(.93*e).toFixed(2):e<500&&300<e?(.95*e).toFixed(2):e<=300&&200<=e?(.97*e).toFixed(2):e.toFixed(2);document.getElementById("task_7_result").innerText=t}function task8(){for(var e,t=0,a=0,n=0,s=0,r=0,c=0,u="",o=0;o<10;)c=parseInt(prompt("Enter number")),isNaN(c)||(u+=c+", ",0===c?n++:0<c?t++:a++,c%2==0?s++:r++,o++);e="Додатні: ".concat(t,", Від'ємні: ").concat(a,", Нулі:").concat(n,", Парні:").concat(s,", Непарні: ").concat(r),document.getElementById("task_8_result").innerHTML=u+"<br>"+e}function task9(){for(var e=(new Date).getDay(),t=e,a=!0;!0===a;){switch(t){case 1:e="Понеділок",t++;break;case 2:e="Вівторок",t++;break;case 3:e="Середа",t++;break;case 4:e="Четвер",t++;break;case 5:e="Пятниця",t++;break;case 6:e="Субота",t++;break;case 7:e="Неділя",t=1}a=confirm("День тижня: ".concat(e,". Хочеш побачити наступний день?"))}}function task10(){for(var e=0,t=100;"="!==a;){var a=Math.round((e+t)/2);switch(prompt("Число яке ви загадали — воно більше >, меньше <, чи дорівнює = ".concat(a,'? Натисніть один із цих трьох знаків: ">" "<" "="'))){case"=":alert("УРА, Ви загадали ".concat(a)),a="=";break;case">":e=a;break;case"<":t=a}}}function task11(){for(var e='<div style="display:flex;flex-wrap:wrap;gap:30px;">',t=2;t<=9;t++){e+="<ul>";for(var a=1;a<=10;a++)e+="<li>"+t+" * "+a+" = "+t*a+"</li>";e+="</ul>"}e+="</div>",document.getElementById("task_11_result").innerHTML=e}function task12(){var e=parseInt(prompt("Введіть день")),t=parseInt(prompt("Введіть місяць")),a=parseInt(prompt("Введіть рік")),n=0;if(isNaN(e)||isNaN(t)||isNaN(a))n="Введіть будь ласка цілі числа.";else{switch(t){case 1:case 3:case 5:case 7:case 8:case 10:case 12:s="31";break;case 4:case 6:case 9:case 11:s="30";break;case 2:var s="28";(a%400==0||a%4==0&&a%100!=0)&&(s="29");break;default:s="Invalid month"}12==t&&31==e?(a++,e=t=1):e==s?(t++,e=1):e<s&&e++,n=e+"/"+t+"/"+a,document.getElementById("task_12_result").innerHTML=n}}