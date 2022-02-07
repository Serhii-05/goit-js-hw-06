const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const newArr = ingredients.map(el => {
  const li = document.createElement('li');
  
  li.textContent = el;
  
  return li;
});
ulEl.append(...newArr);
console.log(ulEl);


