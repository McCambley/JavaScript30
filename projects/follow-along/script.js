console.info('Hello, World!')

const hovers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  // console.log('highlighting')
  const linkCoords = this.getBoundingClientRect()
  const padding = 4
  const coords = {
    width: linkCoords.width + padding * 2,
    height: linkCoords.height + padding * 2,
    left: linkCoords.x + window.scrollX - padding,
    top: linkCoords.y + window.scrollY - padding,
  }

  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`

  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

hovers.forEach((link) => {
  link.addEventListener('mouseenter', highlightLink)
})
