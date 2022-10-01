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
const techNav = document.querySelectorAll('.technology__nav__item')
const techImg = document.querySelectorAll('.technology__img-container img')
const techDesc = document.querySelectorAll('.technology__desc')
const subHead = document.querySelectorAll('.subheader-container p')

sectionEntrances()
document.body.classList.add(
  `${JSON.parse(sessionStorage.getItem('index'))}-background`
)
sections[JSON.parse(sessionStorage.getItem('index')) - 1].classList.remove(
  'unactive'
)
sections[JSON.parse(sessionStorage.getItem('index')) - 1].classList.add(
  'animate__animated',
  'animate__flipInY'
)
navItemsP.forEach(item => item.classList.remove('active'))
navItemsP[JSON.parse(sessionStorage.getItem('index'))].classList.add('active')
activeSubHead(JSON.parse(sessionStorage.getItem('index')) - 1)

function activeSubHead(index) {
  subHead.forEach(item => item.classList.remove('active'))
  subHead[index].classList.add('active')
}

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
      crewImg[index].classList.remove('active', 'animate__fadeInUp')
      crewDesc[index].classList.remove('active', 'animate__fadeInUp')
    })
    this.classList.add('active')
    crewImg[index].classList.add(
      'active',
      'animate__animated',
      'animate__fadeInUp'
    )
    crewDesc[index].classList.add(
      'active',
      'animate__animated',
      'animate__fadeInUp'
    )
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
  activeSubHead(0)
})

navItemsP[2].addEventListener('click', function () {
  document.body.classList.remove('technology-background')
  document.body.classList.add('crew-background')
  sectionEntrances()
  sections[1].classList.remove('unactive')
  sections[1].classList.add('animate__animated', 'animate__flipInY')
  activeSubHead(1)
  setTimeout(() => {
    if (window.innerWidth <= 470) {
      document.body.style.backgroundImage =
        'url(../../assets/crew/background-crew-mobile.jpg)'
    }
  }, 2000)
})
navItemsP[3].addEventListener('click', function () {
  document.body.classList.remove('crew-background')
  document.body.classList.add('technology-background')
  sectionEntrances()
  sections[2].classList.remove('unactive')
  sections[2].classList.add('animate__animated', 'animate__flipInY')
  activeSubHead(2)
  setTimeout(() => {
    if (window.innerWidth <= 470) {
      document.body.style.backgroundImage =
        'url(../../assets/technology/background-technology-mobile.jpg)'
    }
  }, 2000)
})

function removeActiveClass() {
  this.forEach(el => el.classList.remove('active', 'animate__fadeInUp'))
}
techNav.forEach((nav, index) => {
  nav.addEventListener('click', function () {
    ;[techDesc, techImg, techNav].forEach(el => removeActiveClass.call(el))
    techNav[index].classList.add('active')
    techImg[index].classList.add('active')
    techDesc[index].classList.add(
      'active',
      'animate__animated',
      'animate__fadeInUp'
    )
  })
})
