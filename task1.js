// В HTML есть список категорий ul#categories

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4 

const findCategories = document.querySelector('#categories');
const qtyCaregories = findCategories.childElementCount;

console.log(findCategories);
console.log(`В списке ${qtyCaregories} категории`);

const totalCategories = document.querySelectorAll(".item");
const categoriesArray = [...totalCategories]
    .map(categories => `Категория: ${categories.children[0].textContent}Количество элементов: ${categories.children[1].children.length}`)
    .join("\n");
console.log(categoriesArray);
