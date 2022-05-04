function addition () {
    const x = 0.1;
    const y = 0.2;
    let addition = x + y;
    addition = addition.toFixed(1);
    alert(`Сума 0\.1 та 0\.2 буде: ${addition}`);
}


function additionStrNum() {
    let str = '1';
    let num = 2;
    str = parseInt(str);
    additionStrNum = str + num;
    alert(`Математична сума рядка "1" і цифри 2 буде дорівнювати: ${additionStrNum}`);
}

function amountFiles() {
const flashVolumeGb = parseFloat(prompt("Введіть обсяг флешки в Гб:"));
const fileVolume = 820;
const flashVolumeMb = 1024 * flashVolumeGb;
const amountFilesNoRound = flashVolumeMb / fileVolume;
const amountFiles = Math.floor(amountFilesNoRound);
    if (flashVolumeGb > 0) {
        alert(`${amountFiles} файл(и\/ів) розміром в 820 Мб поміститься на флешку об\'ємом ${flashVolumeGb} Гб `);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатнє");
    }
}

function amountChocolates() {
    const amountInWallet = parseFloat(prompt('Введіть суму грошей в гаманці, UAH'));
    const costChocolate = parseFloat(prompt('Введіть ціну шоколадки, UAH'));
    const amountInWalletRound = amountInWallet.toFixed(2);
    const costChocolateRound = costChocolate.toFixed(2);
    const amountChocolates = amountInWalletRound / costChocolateRound;
    const amountChocolatesRound = Math.floor(amountChocolates);
    const change = amountInWalletRound - amountChocolatesRound * costChocolate;
    const changeRound = change.toFixed(2);
    if (costChocolate > amountInWallet) {
        alert(`Вибачте, але ви не можете собі дозволити шоколадку, так як у вас не вистачає грошей, лишіть цих ${amountInWalletRound}UAH у себе в гаманці`);
    } else if (amountInWallet && costChocolate > 0)  {
        alert(`Ви можете собі дозволити: ${amountChocolatesRound} шт\. шоколадок і лишиться ще здачі ${changeRound}\.UAH`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатнє");
    }
}

function abc2cba() {
    const abc = parseInt(prompt('Введіть трьохзначне число'));
    const lastNum = abc%10;
    const middleNum =  parseInt(abc/10%10);
    const firstNum =  parseInt(abc/100);
    abc2cba = lastNum * 100 + middleNum * 10 + firstNum;
    alert(`Тризначне число ${abc} задом наперед — ${abc2cba}`);
 }

 function bankInterest() {
    const amountDepositIn = parseFloat(prompt('Введіть суму вкалду депозиту'));
    const amountDepositInRound = amountDepositIn.toFixed(2);
    const annualInterestRate = amountDepositInRound * 0.05;
    const annualInterestRateRound = annualInterestRate.toFixed(2);
    const bankInterest = annualInterestRateRound / 12 * 2;
    const bankInterestRound = bankInterest.toFixed(2);
    if (amountDepositInRound > 0) {
        alert(`Через 2 місяці з вашого вкладу на суму ${amountDepositInRound} із ставкою 0.05 річних — сума нарахованих відсотків буде дорівнювати —  ${bankInterestRound}\ грн`);
    } else {
        alert("Вибачте, але ви ввели літери або від\'ємне значення або 0, введіть будь ласка додатнє");
    }
 }