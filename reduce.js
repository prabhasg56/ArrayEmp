function impReduce(ele,cb,stValue){
   
    if((Array.isArray(ele))===true){
        
        if(((ele===undefined)&&(cb===undefined))||(cb===undefined)||(ele.length===0)||typeof cb!=='function') {
    
            return [];
        }
        else{
            for(let i=0;i<ele.length;i++){
              if(stValue===undefined){
                stValue=ele[0];
              }
              stValue=cb(stValue,ele[i]);
               
            }
        } 
    }
    else{
        return [];
     }
   return stValue;
}

module.exports=impReduce;
