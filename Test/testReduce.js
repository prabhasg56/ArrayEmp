const items = [1, 2, 3, 4, 5, 5];
const impReduce = require('../reduce.js');

function cb(stValue,curValue,curIndex,orgArray){
    return stValue+curValue;
}
const initialValue=0;
console.log(impReduce(items,cb,initialValue));
