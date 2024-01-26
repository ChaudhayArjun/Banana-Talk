var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler() {
    outputDiv.innerText = "ajsjsjsjsjsjs " + textInput.value; 
}

btnTranslate.addEventListener("click", clickHandler);