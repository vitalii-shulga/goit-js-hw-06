const inputSlider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

inputSlider.addEventListener('input', onInputSlider)

function onInputSlider(event) {
  return (text.style.fontSize = `${event.currentTarget.value}px`)
}
