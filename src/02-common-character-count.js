function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  for (let i = 0; i < s1Arr.length; i++) {
    for (let j = 0; j < s2Arr.length; j++) {
      if (s1Arr[i] === s2Arr[j]) {
        count++;
        s2Arr[j] = NaN;
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
