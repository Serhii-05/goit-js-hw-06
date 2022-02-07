const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', fontControlSize);
function fontControlSize() {
       spanEl.style.fontSize = `${inputEl.value}px`;
}