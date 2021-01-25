// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

let ulList = document.getElementById("ingredients");

const foodIngredients = ingredients.map(ingredient => {
  let items = [];
  items = document.createElement("li");
  items.textContent = ingredient;
  return items;
});

ulList.append(...foodIngredients);
