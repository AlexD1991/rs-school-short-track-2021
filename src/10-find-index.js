function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] < value) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
