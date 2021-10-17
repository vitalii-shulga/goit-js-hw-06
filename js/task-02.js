const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const elements = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li')
  ingredientItemEl.textContent = ingredient
  ingredientItemEl.classList.add('item')

  return ingredientItemEl
})

const ingredientListEl = document.querySelector('#ingredients')
ingredientListEl.append(...elements)

console.log(ingredientListEl)
