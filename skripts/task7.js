// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

let fontControl = document.getElementById("font-size-control");

let text = document.getElementById("text");

fontControl.oninput = function () {
    text.style.fontSize = fontControl.value + "5%";
};
