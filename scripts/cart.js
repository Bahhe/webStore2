const cartBtn = document.querySelector('.cart')
const cancelBtn = document.querySelector('.cancel-cart')
const cart = document.querySelector('.shopping-cart-content')
const itemsCancelBtn = document.querySelectorAll('.cancel-item')
const fixedCart = document.querySelector('.fixed-cart')
const carts = [cartBtn, fixedCart]

carts.forEach(element => {
  element.addEventListener('click', () => {
    cart.style.transform = 'translateX(0)'
  })
}) 

cancelBtn.addEventListener('click', () => {
  cart.style.transform = 'translateX(100%)'
})

itemsCancelBtn.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.remove()
  })
})
