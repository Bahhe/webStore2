const productsViewBtn = document.querySelectorAll('.item-view-btn')

productsViewBtn.forEach((item) => {
  item.addEventListener('click', () => {
    // products Elements
    const product = item.parentElement.parentElement
    const itemImage = product.querySelector('.item-image')
    const itemName = product.querySelector('.item-name')
    const itemSpecs = product.querySelector('.item-specs')
    const itemPrice = product.querySelector('.item-price')

    // item view Elements
    const itemView = document.querySelector('.product-view-container')
    const itemViewImage = itemView.querySelector('.main-image img')
    const itemViewName = itemView.querySelector('.product-view-title')
    const itemViewSpecs = itemView.querySelector('.product-view-info')
    const itemViewPrice = itemView.querySelector('.product-view-price')

    itemViewImage.src = itemImage.src
    itemViewName.innerText = itemName.innerText
    itemViewSpecs.innerText = itemSpecs.innerText
    itemViewPrice.innerText = itemPrice

    location.href = 'products-view.html'
  })
})
