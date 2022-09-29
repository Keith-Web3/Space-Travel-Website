const destinationNavItems = document.querySelectorAll('.destination li')
const destinationImages = document.querySelectorAll(
  '.destination__image-container img'
)
const destinationDesc = document.querySelectorAll(
  '.destination__desc-container .destination__desc'
)
const crewNav = document.querySelectorAll('.crew__nav__item')
const crewDesc = document.querySelectorAll('.crew__desc')
const crewImg = document.querySelectorAll('.crew__img-container img')
const navItemsP = document.querySelectorAll('.nav p')
const sections = document.querySelectorAll('main > div')

destinationNavItems.forEach((item, index) => {
  item.addEventListener('click', function () {
    destinationNavItems.forEach(item => item.classList.remove('active'))
    item.classList.toggle('active')

    if (
      index !==
      [...destinationImages].findIndex(img => img.classList.contains('active'))
    ) {
      let currentPlanet = [
        [...destinationImages].find(img => img.classList.contains('active')),
        [...destinationDesc].find(desc => desc.classList.contains('active')),
      ]
      currentPlanet[0].classList.remove('active', 'animate__jackInTheBox')
      currentPlanet[1].classList.remove('active', 'animate__fadeInRight')
      destinationImages[index].classList.add(
        'active',
        'animate__animated',
        'animate__jackInTheBox'
      )
      destinationDesc[index].classList.add(
        'active',
        'animate__animated',
        'animate__fadeInRight'
      )
    }
  })
})

crewNav.forEach((nav, index) => {
  nav.addEventListener('click', function () {
    if (this.classList.contains('active')) return
    crewNav.forEach((nav, index) => {
      nav.classList.remove('active')
      crewImg[index].classList.remove('active')
      crewDesc[index].classList.remove('active')
    })
    this.classList.add('active')
    crewImg[index].classList.add('active')
    crewDesc[index].classList.add('active')
  })
})

function sectionEntrances() {
  sections.forEach(section => {
    section.classList.add('unactive')
    section.classList.remove('animate__animated', 'animate__flipInY')
  })
}

navItemsP[1].addEventListener('click', function () {
  document.body.classList.remove('crew-background', 'technology-background')
  sectionEntrances()
  sections[0].classList.remove('unactive')
  sections[0].classList.add('animate__animated', 'animate__flipInY')
})

navItemsP[2].addEventListener('click', function () {
  document.body.classList.add('crew-background')
  sectionEntrances()
  sections[1].classList.remove('unactive')
  sections[1].classList.add('animate__animated', 'animate__flipInY')
})
