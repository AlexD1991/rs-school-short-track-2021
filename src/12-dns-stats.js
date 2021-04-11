function getDNSStats(domains) {
  const resultObj = {};
  domains.forEach((domain) => {
    const arr = domain.split('.').reverse();
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += `.${arr[i]}`;
      if (str in resultObj) {
        resultObj[str] += 1;
      } else {
        resultObj[str] = 1;
      }
    }
  });
  return resultObj;
}

module.exports = getDNSStats;
