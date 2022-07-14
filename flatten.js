function impFlatten(ele, depth) {
  let res = [];
  if ((Array.isArray(ele)) === true) {

    if ((ele=== undefined) || (ele.length === 0)) {

      return res;
    }
    else{
        if(depth===undefined){
          depth=1;
        }
        for (let i = 0; i < ele.length; i++) {
            if (Array.isArray(ele[i]) && depth > 0) {
                //console.log(ele[i])
                res = res.concat(impFlatten(ele[i], depth - 1));
                //console.log(res);
            }
            else if (ele[i] === undefined) {
                continue;
            }
            else {
                res.push(ele[i]);
                //console.log(res)
            }
        }
        return res;
      }  
    }
  else {
    return res;
  }
}
module.exports = impFlatten;

