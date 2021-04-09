function renameFiles(names) {
  const copyArr = [...names];
  for (let i = 0; i < copyArr.length - 1; i++) {
    let conter = 0;
    for (let j = i + 1; j < copyArr.length; j++) {
      if (copyArr[i] === copyArr[j]) {
        copyArr[j] = `${copyArr[j]}(${++conter})`;
      }
    }
  }
  return copyArr;
}

module.exports = renameFiles;
