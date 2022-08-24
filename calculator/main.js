
const display = document.getElementById('display')
const keys = document.querySelectorAll('.num_key')
const operator = document.querySelectorAll('.operator_key')

display.value = '';

function solve() {
    try {
        if (display.value != '') { display.value = eval(display.value); }
    }
    catch {
        display.value = 'Fromat Error'
    }
}

// listener for number keys
for (button of keys) {
    button.addEventListener('click', (e) => {
        textvalue = e.target.innerText;
        if (display.value == 'Fromat Error') {
            display.value = "";
            display.value += textvalue;
        } else {
            display.value += textvalue;
        }

    })
}

//listener for operator keys
for (o of operator) {
    o.addEventListener('click', (e) => {
        textvalue = e.target.innerText;
        if (display.value == 'Fromat Error') {
            display.value = "";
            display.value += textvalue;
        } else {
            display.value += textvalue;
        }
    })
}


function del() {
    display.value = display.value.substr(0, display.value.length - 1)
}

function clr() {
    display.value = "";
}

