let val = document.getElementById('output');

function calcLetters(v) {
    switch (val.value) {
        case '0':
            val.value = '';
        case '00':
            val.value = '';
        default:
            var dots = val.value.includes('.')
            val.value += v;
    }


}

function exe() {
    val.value = eval(val.value);
}

function cls() {
    val.value = 0
}

function cancel() {
    if (val.value == '0' || val.value.length <= 2) {
        val.value = 0
    }
    else {
        val.value = val.value.substr(0, val.value.length - 1);
    }
}

function sqrt() {
    val.value = Math.sqrt(val.value)
}

function factorial() {
    let fact = 1;
    for (let i = 1; i <= val.value; i++) {
        fact *= i;
    }

    if (val.value == 0) {
        val.value = 0;
    }
    else {
        val.value = fact;
    }
}