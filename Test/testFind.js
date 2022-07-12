const items = [1, 2, 3, 4, 5, 5];
const impFind=require('../find.js');


function cb(ele){
   
    for(let i=0;i<items.length;i++){
        if(ele===items[i]){
            return true;
        }
    }

}

console.log(impFind(items,cb));
