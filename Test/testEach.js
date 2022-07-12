const items = [1, 2, 3, 4, 5, 5];
const impForEach=require('../each.js')

function cb(e,ind){
   
    console.log(e,ind);

}

impForEach(items,cb);
