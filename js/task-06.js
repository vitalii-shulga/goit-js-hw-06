const textInput = document.querySelector('#validation-input')

textInput.addEventListener('blur', onInput)

function onInput(event) {
  if (event.currentTarget.value.length === +textInput.dataset.length) {
    return textInput.classList.value === '' ? textInput.classList.add('valid') : textInput.classList.replace('invalid', 'valid')
  }

  textInput.classList.value === '' ? textInput.classList.add('invalid') : textInput.classList.replace('valid', 'invalid')
}
