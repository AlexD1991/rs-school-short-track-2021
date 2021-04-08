function getMatrixElementsSum(matrix) {
  let sum = 0;
  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrixCopy.length; row++) {
    for (let col = 0; col < matrixCopy[row].length; col++) {
      if (matrixCopy[row - 1] && matrixCopy[row - 1][col] === 0) matrixCopy[row][col] = 0;
      sum += matrixCopy[row][col];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
