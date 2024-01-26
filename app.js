var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler() {
    console.log("error occured");
    alert("something went wrong please try again later.");
}

function clickHandler() {
    fetch(getTranslationURL(textInput.value))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler); 
}

btnTranslate.addEventListener("click", clickHandler);