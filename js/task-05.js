const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', onInput)

function onInput(event) {
  if (event.currentTarget.value === '') {
    return (nameOutput.textContent = 'Anonymous')
  }
  nameOutput.textContent = event.currentTarget.value
}
