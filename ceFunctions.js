function ceFunc(){
    debugger
    const input = document.getElementById('input');
    if(input.style.backgroundColor == 'rgb(157, 153, 153)'){
        return;
    }
    let arr = input.value.split('');
    arr.splice((arr.length-1),1)
    input.value = arr.join('');
    if(input.value == ''){
        input.value = 0
    }

}