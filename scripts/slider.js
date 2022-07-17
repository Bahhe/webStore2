// SECTION-ONE SLIDER 

const itemsSlider = document.querySelector('.items-slider')
const items = document.querySelector('.item-container')
const leftBtn = document.querySelector('.left-slide-btn')
const rightBtn = document.querySelector('.right-slide-btn')

const itemWidth = items.getBoundingClientRect().width

leftBtn.addEventListener('click', () => {
  itemsSlider.scrollBy({
    left: `-${itemWidth + 10}`,
    behavior: 'smooth'
  })
})
rightBtn.addEventListener('click', () => {
  itemsSlider.scrollBy({
    left: `${itemWidth + 10}`,
    behavior: 'smooth'
  })
})