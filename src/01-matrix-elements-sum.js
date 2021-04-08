function getMatrixElementsSum(matrix) {
  let sum = 0;
  const matrix1 = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix1[row].length; col++) {
      if (matrix1[row - 1] && matrix1[row - 1][col] === 0) matrix1[row][col] = 0;
      sum += matrix1[row][col];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
