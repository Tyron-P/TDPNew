"use strict";

// Inside JavaScript document
let button = document.querySelector("#butt1");

function callMe() {
    alert("Hi there Friends");
}

function alsoCallMe() {
    alert("How can I help?");
}
// SYNTAX: button.addEventListener(event-type, function-to-execute, bubbling?)
button.addEventListener("click", callMe, false);
button.addEventListener("click", alsoCallMe);

//counter 

const counter = document.getElementById("counter");

const updateCounter = (event) => {
    const updated = event.target.innerText;
    if (updated === "R") return counter.value = "0";
    const curr = counter.value;
    const answer = parseInt(curr) + parseInt(updated);

    counter.value = answer;
    writeHistory(curr, updated, answer)
}

const Buttons = document.getElementById("counterButtons").childNodes;
for (let button of Buttons) {
    button.addEventListener("click", updateCounter);
}

const minusFive = () => {
    counter.value = parseInt(counter.value) - 5;
}
// minusFive is a CALLBACK
document.getElementById("minusFiveButton").addEventListener("click", minusFive)



const minusOne = () => {
    counter.value = parseInt(counter.value) - 1;
}

const reset = () => {
    counter.value = "0";
}

const plusOne = () => {
    counter.value = parseInt(counter.value) + 1;
}

const plusFive = () => {
    counter.value = parseInt(counter.value) + 5;
}

const output = document.getElementById("output");

const writeHistory = (num1, num2, answer) => {
    const newHistory = document.createElement("p");
    // output.innerText = num1 + " " + op + " " + num2 + " = " + answer;
    newHistory.innerText = `${num1}${num2}=${answer}`;

    const delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.addEventListener("click", function () {
        const del = confirm("Are you sure you want to delete this?");
        if (del) newHistory.remove();
    })
    newHistory.appendChild(delButton);
    output.prepend(newHistory);

    // if (output.childNodes.length > 5) {
    //     output.childNodes[5].remove();
    // }
}

const calc = document.getElementById("calc");

const updateCalc = (events) => {
    const updated = events.target.innerText;
    if (updated === "R") return calc.value = "0";
    const curr = calc.value;
    const answer = parseInt(curr) + parseInt(updated);

    calc.value = answer;
    writeHistory(curr, updated, answer)
}

const Butts = document.getElementById("calcButtons").childNodes;
for (let Button of Butts) {
    Button.addEventListener("click", updateCalc);
}
