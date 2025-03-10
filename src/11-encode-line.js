function encodeLine(str) {
  const arr = str.split('');
  let encodedStr = '';
  let cur = 0;
  for (let i = 0; i < arr.length; i++) {
    cur = i;
    while (arr[i] === arr[cur]) {
      cur++;
    }
    if (cur - i !== 1) {
      encodedStr += cur - i;
    }
    encodedStr += arr[i];
    i = cur - 1;
  }
  return encodedStr;
}

module.exports = encodeLine;
