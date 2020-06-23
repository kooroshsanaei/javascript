"use strict";

//Here i want to creat some new texts 
//Create a function for moving the box inside the box 
function move() {
    if (pos >= 1000) 
        clearInterval(t);

    else {
        pos = pos + 1;
        box.style.marginLeft = pos+"px";
        while (pos === 1000 ) {
            pos = 0;
            move();
        }
    }
}

var pos = 0;
var box = document.getElementById("box");
var t = setInterval(move,2);