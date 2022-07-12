function impFind(ele,cb){
    let res=[];
    if((Array.isArray(ele))===true){
        
        if(((ele===undefined)&&(cb===undefined))||(cb===undefined)||(ele.length===0)||typeof cb!=='function') {
    
            return undefined;
        }
        else{
            for(let i=0;i<ele.length;i++){
               const r=cb(ele[i]);
               if(r===true){
                res.push(ele[i]);
                
               }
               
            }
        } 
    }
    else{
        return undefined;
     }
   return res;
}

module.exports=impFind;
