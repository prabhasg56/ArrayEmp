const nestedArray = [1, [2],[[3]],[[[5]]]];
const impFlatten=require('../flatten.js')
const depth=3
const result=impFlatten(nestedArray,depth);

console.log(result);
