const x = {}

module.exports = function flatternObj(obj, key) {
    // console.log('obj: ', obj, key)
  for (const i in obj) {
    // console.log('i: ', i, Array.isArray(obj[i]))
    const incKey = parseInt(i, 10) + 1;
    let k = i;
    if (!isNaN(incKey) && Array.isArray(obj)) {
      k = incKey;
    }
    let newKey = k;
    if (key) {
      newKey = key + '.' + k;
    }
    x[newKey] = obj[i];
    if (typeof x[newKey] === 'object') {
      const d = x[newKey];
      for (const j in d) {
        // console.log(j, 'j', typeof d[j])
        let incKey = parseInt(j, 10) + 1;
        let k = j;
        if (!isNaN(incKey) && Array.isArray(obj[i])) {
          k = incKey;
        }
        if (typeof d[j] === 'object') {
          flatternObj(d[j], newKey + '.' + k);
        } else {
          x[newKey + '.' + k] = d[j];
        }
      }
      delete x[newKey];
    }
  }
  return x;
}
