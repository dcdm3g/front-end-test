const listElement = document.querySelector('.item-list')

function handleQuantityInputChange(event) {
  const quantity = event.target.value
  listElement.innerHTML = ''

  for (let i = 1; i <= quantity; i++) {
    const itemElement = document.createElement('li')
    itemElement.className = 'item'
    
    const numberElement = document.createElement('h2')
    numberElement.innerText = i
    numberElement.className = 'item-number'
    
    itemElement.appendChild(numberElement)
    listElement.appendChild(itemElement)
  }
}