import { log } from './log'

/**
 * @param {string} selector
 * @param {HTMLElement} [context]
 * @returns {HTMLElement}
 **/
export const $ = (selector, context) => {
  return (context || document).querySelector(selector)
}

/**
 * @param {string} selector
 * @param {HTMLElement} [context]
 * @returns {HTMLElement[]}
 **/
export const $$ = (selector, context) => {
  return (context || document).querySelectorAll(selector)
}

/**
 * @param {string} selector
 * @param {HTMLElement} [context]
 * @returns {Promise<HTMLElement>}
 */
export const wait$ = (selector, context) => {
  const tmst = +new Date()
  return new Promise((resolve, reject) => {
    log(`Waiting for element ${selector} ...`)
    const interval = setInterval(() => {
      const element = (context || document).querySelector(selector)
      if (!element) return

      log(`Element ${selector} is available after ${+new Date() - tmst}ms`)
      clearInterval(interval)
      resolve(element)
    }, 100)
  })
}

/**
 * @param {string} selector
 * @param {HTMLElement} [context]
 * @returns {Promise<HTMLElement[]>}
 **/
export const wait$$ = (selector, context) => {
  const tmst = +new Date()
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const elements = (context || document).querySelectorAll(selector)
      log(`Waiting for elements ${selector} ...`)
      if (!elements.length) return

      log(`Elements ${selector} are available (count: ${elements.length}) after ${+new Date() - tmst}ms`)
      clearInterval(interval)
      resolve(elements)
    }, 100)
  })
}
