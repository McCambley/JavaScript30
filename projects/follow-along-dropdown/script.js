const triggers = document.querySelectorAll('.menu__dropdown-container')
const dropdownBackground = document.querySelector('.highlight')
const nav = document.querySelector('.menu')

function handleEnter() {
  this.classList.add('menu__dropdown-container_enter')
  setTimeout(() => {
    this.classList.contains('menu__dropdown-container_enter') && this.classList.add('menu__dropdown-container_show')
  }, 150)
  dropdownBackground.classList.add('highlight_show')

  const dropdown = this.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    left: dropdownCoords.left,
    top: dropdownCoords.top,
  }

  dropdownBackground.style.width = `${coords.width}px`
  dropdownBackground.style.height = `${coords.height}px`
  dropdownBackground.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function handleLeave() {
  this.classList.remove('menu__dropdown-container_show')
  setTimeout(() => {
    this.classList.remove('menu__dropdown-container_enter')
  }, 150)
  dropdownBackground.classList.remove('highlight_show')
}

triggers.forEach((item) => item.addEventListener('mouseenter', handleEnter))
triggers.forEach((item) => item.addEventListener('mouseleave', handleLeave))
