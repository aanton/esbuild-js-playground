import { $ } from './dom'
import { log } from './log'

class Timer {
  #selector = '#timer'
  #element

  constructor () {
    this.#element = $(this.#selector)
  }

  #getCurrentTime () {
    return new Date().toUTCString()
  }

  #print () {
    if (!this.#element) {
      log(`Timer: ❌ Element ${this.#selector} not found`)
      return
    }

    const currentTime = this.#getCurrentTime()
    this.#element.innerHTML = currentTime

    log(`Timer: Updated time to ${currentTime}`)
  }

  start () {
    log('Timer: Started')
    setInterval(() => this.#print(), 1000)
  }
}

export default Timer
