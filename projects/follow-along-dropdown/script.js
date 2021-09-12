const triggers = document.querySelectorAll('.menu__dropdown-container')
const dropdownBackground = document.querySelector('.highlight')
const nav = document.querySelector('.menu')

function handleEnter() {
  this.classList.add('menu__dropdown-container_enter')
  setTimeout(() => {
    this.classList.add('menu__dropdown-container_show')
  }, 150)
  dropdownBackground.classList.add('highlight_show')
}

function handleLeave() {
  this.classList.remove('menu__dropdown-container_show')
  setTimeout(() => {
    this.classList.remove('menu__dropdown-container_enter')
  }, 150)
}

triggers.forEach((item) => item.addEventListener('mouseenter', handleEnter))
triggers.forEach((item) => item.addEventListener('mouseleave', handleLeave))

// console.info('Hello, World!')

// const hovers = document.querySelectorAll('a')
// const highlight = document.querySelector('.highlight')
// // const highlight = document.createElement('span')
// // highlight.classList.add('highlight')
// // document.body.append(highlight)

// function highlightLink() {
//   // console.log('highlighting')
//   const linkCoords = this.getBoundingClientRect()
//   const padding = 48
//   const coords = {
//     width: linkCoords.width + padding * 2,
//     height: linkCoords.height + padding * 2,
//     left: linkCoords.x + window.scrollX - padding,
//     top: linkCoords.y + window.scrollY - padding + 42,
//   }

//   highlight.style.width = `${coords.width}px`
//   highlight.style.height = `${coords.height}px`

//   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
// }

// hovers.forEach((link) => {
//   link.addEventListener('mouseenter', highlightLink)
// })
