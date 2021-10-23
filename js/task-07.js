const refs = {
  inputSlider: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
}

refs.inputSlider.addEventListener('input', onInputSlider)

function onInputSlider(event) {
  return (text.style.fontSize = `${event.currentTarget.value}px`)
}
