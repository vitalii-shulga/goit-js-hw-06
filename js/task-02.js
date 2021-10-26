const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const elements = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li')
  ingredientItem.textContent = ingredient
  ingredientItem.classList.add('item')

  return ingredientItem
})

const ingredientList = document.querySelector('#ingredients')
ingredientList.append(...elements)

console.log(ingredientList)
