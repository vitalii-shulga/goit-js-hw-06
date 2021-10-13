const numberOfCategories = document.querySelectorAll('.item')
console.log(`Number of categories: ${numberOfCategories.length}`)

const categories = document.querySelectorAll('.item')
categories.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`)
  console.log(`Elements: ${category.lastElementChild.childElementCount}`)
})
