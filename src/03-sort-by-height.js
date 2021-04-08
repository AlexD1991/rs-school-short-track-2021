function sortByHeight(arr) {
  const sortedArr = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  const resultArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultArr.push(-1);
    } else {
      resultArr.push(sortedArr[j]);
      j++;
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
