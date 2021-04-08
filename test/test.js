const strLib = require('../src/index.js')

test('str.capitalize()', () => {
  expect('Hello World'.capitalize()).toBe('Hello world')
})

test('str.allCaps()', () => {
  expect('Hello World'.allCaps()).toBe('HELLO WORLD')
})

test('str.capitalizeWords()', () => {
  expect('hello world'.capitalizeWords()).toBe('Hello World')
})

test('str.capitalizeHeadline()', () => {
  expect('hello world'.capitalizeHeadline()).toBe('Hello World')
})

 
test('str.removeExtraSpaces()', () => {
  expect(' Hello   World '.removeExtraSpaces()).toBe('Hello World')
})

test('kebobCase', () => {
  expect(' Hello   World '.removeExtraSpaces()).toBe('Hello World')

})

test('snakeCase', () => {
  expect(' Hello   World '.removeExtraSpaces()).toBe('Hello World')
  
})

test('camelCase', () => {
  
})

test('shift', () => {
  
})

test('makeHashTag', () => {
  
})

test('isEmpty', () => {
  
})