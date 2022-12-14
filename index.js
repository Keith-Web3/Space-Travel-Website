const navToggle = document.getElementById('nav-toggle')
const navItems = document.querySelectorAll('.nav p')
const explore = document.querySelector('.explore')

navToggle.addEventListener('click', function () {
  this.classList.toggle('nav-toggle-active')
})
navItems.forEach(item => {
  item.addEventListener('click', function () {
    navItems.forEach(item => item.classList.remove('active'))
    item.classList.toggle('active')
  })
})
document.querySelectorAll('.index-class').forEach((el, idx) => {
  el.addEventListener('click', function () {
    sessionStorage.setItem(
      'name',
      JSON.stringify(el.textContent.trim().slice(3))
    )
    sessionStorage.setItem('index', JSON.stringify(idx))
    location = 'destination-moon.html'
  })
})
document.querySelector('.explore').addEventListener('click', function () {
  sessionStorage.setItem('name', JSON.stringify('destination'))
  sessionStorage.setItem('index', JSON.stringify(1))
  location = 'destination-moon.html'
})
