function impMap(ele,cb){
    let res=[];
    if((Array.isArray(ele))===true){
        
        if(((ele===undefined)&&(cb===undefined))||(cb===undefined)||(ele.length===0)||typeof cb!=='function') {
    
            return res;
        }
        else{
            for(let i=0;i<ele.length;i++){

                res.push(cb(ele[i]));
               
            }
        } 
    }
    else{
        return res;
     }
   return res;
}

module.exports=impMap;
