
const ulEl = document.querySelector('#categories');
// console.log(ulEl);
console.log(
    `В списке ${ulEl.children.length} категории.`
)

const liEl = document.querySelectorAll('.item');
liEl.forEach(el => {
    const category = el.querySelector('h2');
    const quantity = el.querySelector('ul');
    // console.log(category);
    // console.log(quantity);
    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${quantity.children.length}`);
})
