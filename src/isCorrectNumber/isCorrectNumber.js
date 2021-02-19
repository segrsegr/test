export function isCorrectNumber (text) {
  const prepareText = text.trim()
  const result = /^(\d|(-|\+)\d+)(\.|(e-?\d+)(?!\.)|\d)*?(\d|\.)?$/.exec(prepareText)

  return !!result
}
