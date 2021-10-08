export function transformTemperature(value, from = 'f') {
  let result = null;
  switch (from) {
    case 'f':
      result = (value - 32) / 1.8;
      return result;
    case 'c':
      result = value * 1.8 + 32;
      return result;
  }
}
export function getPercentOf(firstNumber, secondNumber) {
  return (firstNumber / secondNumber) * 100;
}

export function compareSimilarity(a, b) {
  a = a.similarity;
  b = b.similarity;
  if (a > b) {
    return 1;
  }
  if (a > b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
}
