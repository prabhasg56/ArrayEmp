function impReduce(ele, cb, stValue) {

  if ((Array.isArray(ele)) === true) {

    if (((ele === undefined) && (cb === undefined)) || (cb === undefined) || (ele.length === 0) || typeof cb !== 'function') {

      return [];
    }
    else {
      if (stValue === undefined) {
         stValue = ele[0];
        for (let i = 1; i < ele.length; i++) {
          stValue = cb(stValue, ele[i], i, ele);
        }
      }
      else {
        for (let i = 0; i < ele.length; i++) {
          stValue = cb(stValue, ele[i], i, ele);
        }
      }
    }
  }
  else {
    return [];
  }
  return stValue;
}

module.exports = impReduce;
