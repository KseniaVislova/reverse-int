module.exports = function reverse (n) {
  if (n < 0) {
    n *= -1;
  }
  let result = [];
  let string = String(n).split('');
  for(i = string.length - 1; i >= 0; i--) {
    if (string[i] !== 0) {
      result.push(string[i]);
    }
  }
  return Number(result.join(''));
}
