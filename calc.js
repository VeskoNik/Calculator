let num = 0;
let numResult = 0;
let calculation = '';
let resultCalc = '';
let clickedResult = false;
function calc(event) {
    const input = document.getElementById('input');
    const plus = document.getElementById('plus');
    const minus = document.getElementById('subtract');
    const divide = document.getElementById('divide');
    const multiplication = document.getElementById('multiplication');
    const percent = document.getElementById('percentage');
    let clicked = event.target
    let currentNum = clicked.textContent;
    const color = 'rgb(157, 153, 153)'
    if (input.style.backgroundColor == color) {
        return;
    }
    if (clicked == minus || clicked == plus || clicked == multiplication || clicked == divide) {
        if (minus.style.backgroundColor == color || plus.style.backgroundColor == color ||
            multiplication.style.backgroundColor == color || divide.style.backgroundColor == color) {
                minus.style.backgroundColor = '';
                plus.style.backgroundColor = '';
                divide.style.backgroundColor = '';
                multiplication.style.backgroundColor = '';
                clicked.style.backgroundColor = color;
                return
        }
    }
    if (plus.style.backgroundColor == color) {
        num = Number(input.value);
        input.value = '';
        calculation = '+';
        plus.style.backgroundColor = '';
    }
    if (minus.style.backgroundColor == color) {
        num = Number(input.value);
        input.value = '';
        calculation = '-';
        minus.style.backgroundColor = '';
    }
    if (multiplication.style.backgroundColor == color) {
        num = Number(input.value);
        input.value = '';
        calculation = '*';
        multiplication.style.backgroundColor = '';
    }
    if (divide.style.backgroundColor == color) {
        num = Number(input.value);
        input.value = '';
        calculation = '/';
        divide.style.backgroundColor = '';
    }
    if (clicked.id == 'point') {
        if(input.value.includes('.')){
            return;
        }
        input.value += '.';
        clickedResult = false;
    } else if (clicked.id == 'plus') {
        plus.style.backgroundColor = color;
        if (num == 0) {
            num = Number(input.value);
        } else if (calculation == '+') {
            input.value = Number(input.value) + num;
        } else if (calculation == '*') {
            input.value = num * Number(input.value);
        } else if (calculation == '-') {
            input.value = num - Number(input.value);
        } else if (calculation == '/') {
            input.value = num / Number(input.value);
        }
        
    } else if (clicked.id == 'subtract') {
        minus.style.backgroundColor = color;
        if (num == 0) {
            num = Number(input.value);
        } else if (calculation == '+') {
            input.value = Number(input.value) + num;
        } else if (calculation == '*') {
            input.value = num * Number(input.value);
        } else if (calculation == '-') {
            input.value = num - Number(input.value);
        } else if (calculation == '/') {
            input.value = num / Number(input.value);
        }
        
    } else if (clicked.id == 'multiplication') {
        multiplication.style.backgroundColor = color;
        if (num == 0) {
            num = Number(input.value);
        } else if (calculation == '+') {
            input.value = Number(input.value) + num;
        } else if (calculation == '*') {
            input.value = num * Number(input.value);
        } else if (calculation == '-') {
            input.value = num - Number(input.value);
        } else if (calculation == '/') {
            input.value = num / Number(input.value);
        }
        
    } else if (clicked.id == 'divide') {
        divide.style.backgroundColor = color;
        if (num == 0) {
            num = Number(input.value);
        } else if (calculation == '+') {
            input.value = Number(input.value) + num;
        } else if (calculation == '*') {
            input.value = num * Number(input.value);
        } else if (calculation == '-') {
            input.value = num - Number(input.value);
        } else if (calculation == '/') {
            input.value = num / Number(input.value);
        }
        
    } else if (clicked.id == 'percentage') {
        if (num == 0) {
            input.value = Number(input.value) / 100;
        } else {
            input.value = (num * Number(input.value) / 100);
            calculation = ''
        }
    } else if (clicked.id == 'result') {
        if (num == 0 && calculation == '') {
            if (resultCalc == '+') {
                num = Number(input.value)
                input.value = num + numResult;
            } else if (resultCalc == '*') {
                input.value = num * numResult;
            } else if (resultCalc == '-') {
                input.value = num - numResult;
            } else if (resultCalc == '/') {
                input.value = num / numResult;
            }
        } else if (calculation == '+') {
            resultCalc = '+'
            numResult = Number(input.value)
            input.value = Number(input.value) + num;
        } else if (calculation == '*') {
            resultCalc = '*'
            numResult = Number(input.value)
            input.value = num * Number(input.value);
        } else if (calculation == '-') {
            resultCalc = '-'
            numResult = Number(input.value)
            input.value = num - Number(input.value);
        } else if (calculation == '/') {
            resultCalc = '/'
            numResult = Number(input.value)
            input.value = num / Number(input.value);
        }
        clickedResult = true
        calculation = '';
        num = 0;
    }else if(clickedResult){
        input.value = currentNum 
        clickedResult = false;
        return;
    }else {
        input.value.length == 1 && input.value == 0 ? input.value = currentNum : input.value += currentNum
    }
}