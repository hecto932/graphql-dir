'use strict'

function errorHandler(error) {
  console.error(error)
  throw new Error('Internal server error')
}

module.exports = errorHandler