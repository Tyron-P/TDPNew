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

