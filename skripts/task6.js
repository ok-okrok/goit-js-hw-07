// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

let inputValue = document.getElementById("validation-input");

let totalLenght = inputValue.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValue.oninput = function () {
    // if (inputValue.value.length === intTotallenght) {
    //     inputValue.classList.remove("invalid");
    //     inputValue.classList.add("valid");
    // }
    // if (inputValue.value.length === 0) {
    //     inputValue.classList.remove("valid");
    //     inputValue.classList.remove("invalid");
    // }
    // if (inputValue.value.length !== intTotallenght && inputValue.value.length !== 0) {
    //     inputValue.classList.add("invalid");
    // }
    nameOutput.innerHTML = input.value || 'незнакомец';
};
