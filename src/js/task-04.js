const decrementButton = document.querySelector(`button[data-action=decrement]`);
const incrementButton = document.querySelector(`button[data-action=increment]`);
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementButton.addEventListener('click', decrementButtonClick);
function decrementButtonClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementButton.addEventListener('click', incrementButtonClick);
function incrementButtonClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}