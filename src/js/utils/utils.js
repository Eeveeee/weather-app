export function transformTemperature(value, from = 'f') {
  let result = null;
  switch (from) {
    case 'f':
      result = (value - 32) / 1.8;
      console.log('FROM FAR', result);
      return result;
      break;
    case 'c':
      result = value * 1.8 + 32;
      return result;
      break;
  }
}
