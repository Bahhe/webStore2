const searchBtn = document.querySelector('.search')
const inputBtn = document.querySelector('.input-btn')
const searchBar = document.querySelector('.search-input')
const searchIpt = document.querySelector('.search-area')

searchBtn.addEventListener('click', () => {
  searchBar.style.display = 'flex'
  searchIpt.focus()
})

inputBtn.addEventListener('click', () => {
  searchBar.style.display = 'none'
})
