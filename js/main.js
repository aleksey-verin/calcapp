let currentDigits = ''
let currentResult = ''
let resultFlag = 0

function num() {
    //флаг для многократного нажатия "равно"
    if (resultFlag !== 0) {
        clear()  
    }
    //проверка на длину
    if (currentDigits.length > 23) {
        return currentDigits
    }

    // проверка на точку в числе и двойную точку
    if ((currentDigits.includes('.')) && (this.getAttribute('value') == '.')) {
        currentDigits
    } else {
        currentDigits += this.getAttribute('value')
    }
    
    document.querySelector('#print_result').textContent = currentDigits
    checkLengthOfCurrentDigits()
    console.log(currentDigits)
}

function add() {

    lastAction = function() {
        if (currentResult === '') {
            return currentResult = +currentDigits
        } else {
            return currentResult = +currentResult + +currentDigits
        }
    }
    lastAction()
    
    document.querySelector('#print_result').textContent = currentResult
    currentDigits = ''
    console.log(currentResult)
    return currentResult
}

function multiply() {

    lastAction = function() {
        if (currentResult === '') {
            return currentResult = +currentDigits
        } else {
            return currentResult = +currentResult * +currentDigits
        }
    }
    lastAction()
    document.querySelector('#print_result').textContent = currentResult
    currentDigits = ''
    console.log(currentResult)
    return currentResult
}

function divide() {

    lastAction = function() {
        if (currentResult === '') {
            return currentResult = +currentDigits
        } else {
            return currentResult = +currentResult / +currentDigits
        }
    }
    lastAction()
    document.querySelector('#print_result').textContent = currentResult
    currentDigits = ''
    console.log(currentResult)
    return currentResult
}

function subtract() {

    lastAction = function() {
        if (currentResult === '') {
            return currentResult = +currentDigits
        } else {
            return currentResult = +currentResult - +currentDigits
        }
    }
    lastAction()
    document.querySelector('#print_result').textContent = currentResult
    currentDigits = ''
    console.log(currentResult)
    return currentResult
}

function percent() {
    currentDigits = currentDigits / 100
    document.querySelector('#print_result').textContent = currentDigits
}



function showResult() {
    currentResult = lastAction()
    resultFlag++
    checkLengthOfCurrentResult()
    document.querySelector('#print_result').textContent = currentResult
    console.log(currentResult, currentDigits, resultFlag)
}

function clear() {
    currentResult = ''
    currentDigits = ''
    resultFlag = 0
    document.querySelector('#print_result').textContent = 0
    document.querySelector('#print_result').style.fontSize = '100%'
}

function checkLengthOfCurrentResult() {
    if (currentResult.toString().length >= 0 && currentResult.toString().length <= 7 ) {
        document.querySelector('#print_result').style.fontSize = '100%'
    } else if (currentResult.toString().length > 7 && currentResult.toString().length <= 9 ) {
        document.querySelector('#print_result').style.fontSize = '75%'
    } else if (currentResult.toString().length > 10 && currentResult.toString().length <= 15 ) {
        document.querySelector('#print_result').style.fontSize = '50%'
    } else if (currentResult.toString().length > 15 && currentResult.toString().length <= 20 ) {
        document.querySelector('#print_result').style.fontSize = '37%'
    } else if (currentResult.toString().length > 20) {
        document.querySelector('#print_result').style.fontSize = '30%'
    }
}
function checkLengthOfCurrentDigits() {
    if (currentDigits.toString().length >= 0 && currentDigits.toString().length <= 7 ) {
        document.querySelector('#print_result').style.fontSize = '100%'
    } else if (currentDigits.toString().length > 7 && currentDigits.toString().length <= 9 ) {
        document.querySelector('#print_result').style.fontSize = '75%'
    } else if (currentDigits.toString().length > 10 && currentDigits.toString().length <= 14 ) {
        document.querySelector('#print_result').style.fontSize = '50%'
    } else if (currentDigits.toString().length > 15 && currentDigits.toString().length <= 20 ) {
        document.querySelector('#print_result').style.fontSize = '37%'
    } else if (currentDigits.toString().length > 20) {
        document.querySelector('#print_result').style.fontSize = '30%'
    }
}


cell_clear.addEventListener("click", clear);
cell_result.addEventListener("click", showResult);
cell_pers.addEventListener("click", percent);
cell_divide.addEventListener("click", divide);
cell_multy.addEventListener("click", multiply);
cell_subtract.addEventListener("click", subtract);
cell_add.addEventListener("click", add);
cell_dot.addEventListener("click", num);
cell_0.addEventListener("click", num);
cell_1.addEventListener("click", num);
cell_2.addEventListener("click", num);
cell_3.addEventListener("click", num);
cell_4.addEventListener("click", num);
cell_5.addEventListener("click", num);
cell_6.addEventListener("click", num);
cell_7.addEventListener("click", num);
cell_8.addEventListener("click", num);
cell_9.addEventListener("click", num);

// Ищу способ как красить кнопки при нажатии на клавиатуру
function clearGrey() {
    document.getElementById("cell_0").style.background = ""
}
// ====

document.body.addEventListener("keypress", function(event) {
    console.log(event.key)
    if (event.key === '0') {
        cell_0.click()
        //====
        document.getElementById("cell_0").style.background = "#555";
        setTimeout(clearGrey, 200)
        console.log('key 0')
        //====
    }
    if (event.key === '1') {
        cell_1.click()
    }
    if (event.key === '2') {
        cell_2.click()
    }
    if (event.key === '3') {
        cell_3.click()
    }
    if (event.key === '4') {
        cell_4.click()
    }
    if (event.key === '5') {
        cell_5.click()
    }
    if (event.key === '6') {
        cell_6.click()
    }
    if (event.key === '7') {
        cell_7.click()
    }
    if (event.key === '8') {
        cell_8.click()
    }
    if (event.key === '9') {
        cell_9.click()
    }
    if (event.key === '.') {
        cell_dot.click()
    }
    if (event.key === 'c') {
        cell_clear.click()
    }
    if (event.key === 'Enter') {
        cell_result.click()
    }
    if (event.key === '/') {
        cell_divide.click()
    }
    if (event.key === '*') {
        cell_multy.click()
    }
    if (event.key === '-') {
        cell_subtract.click()
    }
    if (event.key === '+') {
        cell_add.click()
    }
    if (event.key === '%') {
        cell_pers.click()
    }
});

