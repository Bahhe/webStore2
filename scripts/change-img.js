const mainImage = document.querySelectorAll('.main-image img')
const subImage = document.querySelectorAll('.sub-images img')


subImage.forEach((subimg) => {
  subimg.addEventListener('click', () => {
    mainImage.forEach((mainimg) => {
      mainimg.src = subimg.src
    })
  })
})