"use strict";function addition(){var t=(t=.1+.2).toFixed(1);alert("Сума 0.1 та 0.2 буде: ".concat(t))}function additionStrNum(){var t="1",t=parseInt(t);alert('Математична сума рядка "1" і цифри 2 буде дорівнювати: '.concat(additionStrNum=t+2))}function amountFiles(){var t=parseFloat(prompt("Введіть обсяг флешки в Гб:")),a=1024*t/820,o=Math.floor(a);0<t?alert("".concat(o," файл(и/ів) розміром в 820 Мб поміститься на флешку об'ємом ").concat(t," Гб ")):alert("Вибачте, але ви ввели літери або від'ємне значення або 0, введіть будь ласка додатнє")}function amountChocolates(){var t=parseFloat(prompt("Введіть суму грошей в гаманці, UAH")),a=parseFloat(prompt("Введіть ціну шоколадки, UAH")),o=t.toFixed(2),c=o/a.toFixed(2),r=Math.floor(c),n=(o-r*a).toFixed(2);t<a?alert("Вибачте, але ви не можете собі дозволити шоколадку, так як у вас не вистачає грошей, лишіть цих ".concat(o,"UAH у себе в гаманці")):t&&0<a?alert("Ви можете собі дозволити: ".concat(r," шт. шоколадок і лишиться ще здачі ").concat(n,".UAH")):alert("Вибачте, але ви ввели літери або від'ємне значення або 0, введіть будь ласка додатнє")}function abc2cba(){var t=parseInt(prompt("Введіть трьохзначне число"));abc2cba=100*(t%10)+10*parseInt(t/10%10)+parseInt(t/100),alert("Тризначне число ".concat(t," задом наперед — ").concat(abc2cba))}function bankInterest(){var t=parseFloat(prompt("Введіть суму вкалду депозиту")).toFixed(2),a=((.05*t).toFixed(2)/12*2).toFixed(2);0<t?alert("Через 2 місяці з вашого вкладу на суму ".concat(t," із ставкою 0.05 річних — сума нарахованих відсотків буде дорівнювати —  ").concat(a," грн")):alert("Вибачте, але ви ввели літери або від'ємне значення або 0, введіть будь ласка додатнє")}