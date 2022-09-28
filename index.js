const navToggle = document.getElementById('nav-toggle')
const navItems = document.querySelectorAll('.nav p')

navToggle.addEventListener('click', function () {
  this.classList.toggle('nav-toggle-active')
})
navItems.forEach(item => {
  item.addEventListener('click', function () {
    navItems.forEach(item => item.classList.remove('active'))
    item.classList.toggle('active')
  })
})
