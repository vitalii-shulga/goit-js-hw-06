const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color'),
}

refs.buttonChangeColor.addEventListener('click', backgroundChangeColor)

function backgroundChangeColor() {
  const newColor = getRandomHexColor()
  refs.body.style.backgroundColor = newColor
  refs.color.textContent = newColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
