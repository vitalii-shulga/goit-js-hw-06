const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`)
  console.log(`Elements: ${category.lastElementChild.childElementCount}`)
})
