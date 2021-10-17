/* Напиши скрипт, который для каждого элемента массива ingredients:
 * Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
 * Добавит название ингредиента как его текстовое содержимое.
 * Добавит элементу класс item.
 * После чего вставит все <li> за одну операцию в список ul.ingredients.
 */

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
