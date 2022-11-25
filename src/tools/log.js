/**
 * @param {string} message
 * @returns {void}
 */
export const log = (message) => {
  console.log(message)
}

/**
 * @param {string} message
 * @returns {void}
 */
export const unusedLog = function (message) {
  unusedFunction(message)
}

const unusedFunction = function (message) {
  console.log(`This is a unused function: ${message}`)
}
