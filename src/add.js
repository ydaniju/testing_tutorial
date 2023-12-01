// Add any amount of numbers together

const add = (...inputs) => {
  inputs.forEach(input => {
    if (typeof input !== 'number') {
      throw new Error('All inputs must be numbers')
    }
  })

  return inputs.reduce((sum, input) => sum + input, 0)
}

module.exports = add

