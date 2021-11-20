const inputBin = document.getElementById('binToDec');
const outputBin = document.querySelector('.outputBin');
const buttonBin = document.querySelector('.buttonBin');
const buttonBinClear = document.querySelector('.buttonBinClear');

const inputDec = document.getElementById('decToBin');
const outputDec = document.querySelector('.outputDec');
const buttonDec = document.querySelector('.buttonDec');
const buttonDecClear = document.querySelector('.buttonDecClear');

// ....functions Bin..................

function clearBin() {
    inputBin.value = '';
    outputBin.innerText = '';
}

const isBinary = (num) => {
    let binary = true;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '0' && num[i] !== '1') {
            binary = false;
        }
    }
    return binary;
}

function convBinToDec(bin) {
    const result = parseInt(bin, 2);

    /* const binArr = bin.split('');
    let power = binArr.length - 1;

    const result = binArr.map(num => {
        const numNum = Number(num);

        const position = numNum * (2 ** power);
        power--;
        return position;

    }).reduce((num, acc) => acc += num, 0); */

    outputBinResult(`Decimal number: ${result}`);

    // https://www.npmjs.com/package/canvas-confetti
   /*  confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    }); */

}

function validateBin(num) {
    if (!isBinary(num)) {

        alert(`${num} is not a binary number!`)

    } else if (num == '') {
        alert(`Please, enter a binary number!`)
    } else {

        convBinToDec(inputBin.value);
    }
}

function outputBinResult(result) {
    outputBin.innerText = result;
}

// .........functions Dec................................

function clearDec() {
    outputDec.innerText = '';
    inputDec.value = '';
}
function validateDec(num) {
    console.log(num);
    if (!onlyDigits(num)) {
        alert(`${num} is not a decimal number!`)

    } else if (num == '') {
        alert(`Please, enter a decimal number!`)
    } else {

        convDecToBin(inputDec.value);
    }
}
function onlyDigits(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str.charCodeAt(i);
        if (char < 48 || char > 57) return false
    }
    return true
}

function convDecToBin(str) {
    let number = parseInt(str);
    const result = number.toString(2);
  /*   const resultArr = [];
    do {
    number = Math.trunc(number / 2);
    console.log('number', number);
    const bin = (number%2); 
    console.log('bin', bin);
    resultArr.push(bin); 
    } while (number !== 0);
    console.log(resultArr);
    const result = resultArr.join('');  */



    outputDecResult(`Binary number: ${result}`);

   /*  confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    }); */

}
function outputDecResult(result) {
    outputDec.innerText = result;
}

//..............main



inputBin.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        validateBin(inputBin.value);

    }
});
buttonBin.addEventListener('click', () => {
    validateBin(inputBin.value);
});

buttonBinClear.addEventListener('click', (event) => {
    clearBin();
});


inputDec.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        validateDec(inputDec.value);

    }
});
buttonDec.addEventListener('click', () => {
    validateDec(inputDec.value);
});

buttonDecClear.addEventListener('click', (event) => {
    clearDec();
});


clearBin();
clearDec();










