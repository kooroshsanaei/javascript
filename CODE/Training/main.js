"use strict";

var resutl = document.getElementById('result');

function myFunction() {
    var num = document.getElementById('num1').value;
    var num1 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num = parseInt(num);
    var sum = num + num1;
    resutl.innerHTML = sum;

}