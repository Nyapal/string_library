const strLib = require('../src/index.js')
const str = 'Hello World'

test('Sanity check', () => {
  // this test pases 
  expect(2 + 2).toBe(4)
})

test('capitalize', () => {
  expect(str.capitalize()).toBe('Hello world')
})