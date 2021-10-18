const valueEl = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = valueEl.textContent

decrementBtn.addEventListener('click', onDecrementBtnClick)
incrementBtn.addEventListener('click', onIncrementBtnClick)

function onDecrementBtnClick() {
  valueEl.textContent = counterValue -= 1
}

function onIncrementBtnClick() {
  valueEl.textContent = counterValue += 1
}
