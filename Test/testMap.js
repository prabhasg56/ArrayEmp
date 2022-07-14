const items = ["1", "2", "3", "4", "5", "5"];
const impMap=require('../map.js');

function cb(ele,index,OrgArray){
      return ele+1;
}
console.log(impMap(items,cb));
