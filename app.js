var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");


function clickHandler() {
    console.log("clicked")
    console.log(textInput.value);
}

btnTranslate.addEventListener("click", clickHandler);