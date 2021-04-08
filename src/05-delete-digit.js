function deleteDigit(n) {
  const arr = n.toString().split('');
  let max = 0;
  let copyArr = [];
  let curNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    copyArr = [...arr];
    copyArr.splice(i, 1);
    curNumber = parseInt(copyArr.join(''), 10);
    if (curNumber > max) max = curNumber;
  }
  return max;
}

module.exports = deleteDigit;
