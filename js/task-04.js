const value = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0

decrementBtn.addEventListener('click', onDecrementBtnClick)
incrementBtn.addEventListener('click', onIncrementBtnClick)

function onDecrementBtnClick() {
  value.textContent = counterValue -= 1
}

function onIncrementBtnClick() {
  value.textContent = counterValue += 1
}
