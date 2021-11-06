import { $, wait$ } from './tools/dom'
import { wait } from './tools/wait'

wait(1000).then(() => {
  const body = $('body')
  body.classList.add('loaded')
})

wait$('body.loaded').then((element) => {
  element.style.backgroundColor = 'tomato'
})
