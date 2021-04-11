function minesweeper(matrix) {
  const resultMatrix = matrix.slice().map((row) => row.map(() => 0));
  for (let row = 0; row < resultMatrix.length; row++) {
    for (let col = 0; col < resultMatrix[row].length; col++) {
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (!(i === row && j === col) && matrix[i] && matrix[i][j]) {
            resultMatrix[row][col]++;
          }
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
