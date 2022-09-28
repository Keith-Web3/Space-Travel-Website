const destinationNavItems = document.querySelectorAll('.destination li')
const destinationImages = document.querySelectorAll(
  '.destination__image-container img'
)
const destinationDesc = document.querySelectorAll(
  '.destination__desc-container .destination__desc'
)

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
