export function missingNumber (array) {
  for (let i = 1;; i++) {
    if (!array.includes(i)) {
      return i
    }
  }
}
