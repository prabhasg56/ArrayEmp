const items = [1, 2, 3, 4, 5, 5];
const impReduce = require('../reduce.js');

function cb(stValue,ele){
   
    return stValue+ele;

}

console.log(impReduce(items,cb,0));
