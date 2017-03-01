module.exports = class JoinHierarchy {
  constructor(obj) {
    this.x = {};
    this.joinKeys(obj);
    return this.x;
  }
  joinKeys(obj, key) {
    // console.log('obj: ', obj, key)
    for (const i in obj) {
      // console.log('i: ', i, Array.isArray(obj[i]))
      const u = parseInt(i, 10) + 1;
      let k = i;
      if (!isNaN(u) && Array.isArray(obj)) {
        k = u;
      }
      let o = k;
      if (key) {
        o = key + '.' + k;
      }
      this.x[o] = obj[i];
      if (typeof this.x[o] === 'object') {
        const d = this.x[o];
        for (const j in d) {
          // console.log(j, 'j', typeof d[j])
          let u = parseInt(j, 10) + 1;
          let k = j;
          if (!isNaN(u) && Array.isArray(obj[i])) {
            k = u;
          }
          if (typeof d[j] === 'object') {
            this.joinKeys(d[j], o + '.' + k);
          } else {
            this.x[o + '.' + k] = d[j];
          }
        }
        delete this.x[o];
      }
    }
  }
}
