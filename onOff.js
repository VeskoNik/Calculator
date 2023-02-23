function onOff(){
    const plus = document.getElementById('plus');
    const minus = document.getElementById('subtract');
    const divide = document.getElementById('divide');
    const multiplication = document.getElementById('multiplication');
    const percent = document.getElementById('percentage');
    const input = document.getElementById("input")
if(input.style.backgroundColor == 'rgb(157, 153, 153)'){
    input.style.backgroundColor =  'rgb(216, 211, 211)';
    input.value = 0
}else{
    input.style.backgroundColor = 'rgb(157, 153, 153)';
    input.value = '';
    num = 0;
    num2 = 0;  
    calculation = '';
    if(plus.style.backgroundColor == 'rgb(157, 153, 153)'){
        plus.style.backgroundColor = '';
    }
    if(minus.style.backgroundColor == 'rgb(157, 153, 153)'){
        minus.style.backgroundColor = '';
    }
    if(divide.style.backgroundColor == 'rgb(157, 153, 153)'){
        divide.style.backgroundColor = '';
    }
    if(percent.style.backgroundColor == 'rgb(157, 153, 153)'){
        percent.style.backgroundColor = '';
    }
    if(multiplication.style.backgroundColor == 'rgb(157, 153, 153)'){
        multiplication.style.backgroundColor = '';
    }
}
}