import { $ } from './tools/dom'
import { log } from './tools/log'

const colors = ['cyan', 'gray', 'orange']

document.addEventListener('click', () => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  $('body').style.backgroundColor = color
  log(`Background color changed to ${color}`)
})
