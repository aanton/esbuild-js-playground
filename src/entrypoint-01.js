import { $, wait$ } from './tools/dom'
import { log } from './tools/log'
import { wait } from './tools/wait'

wait(1000).then(() => {
  const body = $('body')
  body.classList.add('loaded')
})

wait$('body.loaded').then((element) => {
  const color = 'tomato'
  element.style.backgroundColor = color
  log(`Background color changed to ${color}`)
})
