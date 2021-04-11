function getSumOfDigits(n) {
  const sum = n
    .toString()
    .split('')
    .reduce((calc, item) => calc + parseInt(item, 10), 0);
  if (sum > 9) {
    return getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
