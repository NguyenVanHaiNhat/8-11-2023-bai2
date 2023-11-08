function plus() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
    total = x + y;
    document.getElementById("result").innerHTML = "result : " + total;
}
function minus() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
    signal = x - y;
    document.getElementById("result").innerHTML = "result : " + signal;
}
function Multiplication() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
    core = x * y;
    document.getElementById("result").innerHTML = "result : " + core;
}
function Division() {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;
    division = x / y;
    document.getElementById("result").innerHTML = "result : " + division;
}

function opp(phepTinh) {
    let x = +document.getElementById("number1").value;
    let y = +document.getElementById("number2").value;

    total = eval(x +phepTinh+ y);
    document.getElementById("result").innerHTML = "result : " + total;
}