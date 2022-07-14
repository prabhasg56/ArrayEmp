const items = [1, 2, 3, 4, 5, 5];
const impFilter=require('../filter.js');


function cb(ele,index,OrgArray){
   
    return ele>1;

}

console.log(impFilter(items,cb));
