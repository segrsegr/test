import { isCorrectNumber } from './isCorrectNumber'

const cases = [
  ['0', true],
  [' 0.5 ', true],
  ['fg', false],
  ['3 z', false],
  ['1e20', true],
  ['  -180e3 ', true],
  ['   7e', false],
  ['e9', false],
  [' 5e-2', true],
  [' 42e3.5 ', false],
  ['  84.', true],
  ['   126.e3', true],
  ['71.3e82', true],
  ['+21  ', true],
  [' --7 ', false],
  ['-+1', false],
  ['42z43f44', false]
]

test.each(cases)('%s: tested on correct number', (a, expected) => {
  expect(isCorrectNumber(a)).toBe(expected)
})
