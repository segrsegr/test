import { missingNumber } from './missingNumber'

const cases = [
  [[3, 5, 4, 0], 1],
  [[6, 7, 8, -2, -1, 1], 2],
  [[42, 43, 44], 1],
  [[432, 43, 144], 1],
  [[42, 0, 2, 4, 7, 13, 144], 1],
  [[42, 0, 1, 4, 7, 13, 144], 2],
  [[0, 1, 2, 4, 7, 13, 144], 3]
]

test.each(cases)('in array: %s found missing number', (a, expected) => {
  expect(missingNumber(a)).toBe(expected)
})
