const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
// console.log(ulEl);
const newArr = ingredients.map(el => {
  const li = document.createElement('li');
  // console.log(li);
  li.textContent = el;
  // console.log(el);
  return li;
});



// console.log(newArr);

ulEl.append(...newArr);



console.log(ulEl);


