import { log } from './log'

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function wait (ms) {
  log(`Waiting for ${ms}ms ...`)
  return new Promise((resolve) => {
    setTimeout(() => {
      log(`Waited for ${ms}ms`)
      resolve()
    }, ms)
  })
}
