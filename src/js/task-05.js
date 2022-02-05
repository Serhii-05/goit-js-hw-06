const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputName);

function inputName(ev) {
    spanEl.textContent = ev.currentTarget.value;

    if (ev.currentTarget.value === '') {
      spanEl.textContent = 'Anonymous';
   }
}
