"use strict"
let outputScreen = document.getElementById("output-screen");

const display = num =>{
    outputScreen.value += num;
}

const Calculate = () =>{
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert("Invalid");
    }
}

const Clear = () =>{
    outputScreen.value = "";
}

const del = () =>{
    outputScreen.value = outputScreen.value.slice(0, -1);
}