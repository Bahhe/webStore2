const slider = document.querySelectorAll('.product-showcase')
setInterval(() => {
  slider[0].classList.toggle('active')
  slider[1].classList.toggle('active')
}, 7000);