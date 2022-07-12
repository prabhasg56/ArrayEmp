function impForEach(ele,cb){
    if((Array.isArray(ele))===true){
        
        if(((ele===undefined)&&(cb===undefined))||(cb===undefined)||(ele.length===0)||typeof cb!=='function') {
    
            console.log([]);
        }
        else{
            for(let i=0;i<ele.length;i++){
               cb(ele[i],i);
               
            }
        } 
    }
    else{
        console.log([]);
     }
}

module.exports=impForEach;
