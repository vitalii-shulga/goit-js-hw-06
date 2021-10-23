const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()

  const {
    elements: { email, password },
  } = event.currentTarget

  const userData = {}
  userData[email.name] = email.value
  userData[password.name] = password.value
  console.log(userData)

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены')
  }

  event.currentTarget.reset()
}
