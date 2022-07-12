function impFlatten(ele){
    let res=[];
    if((Array.isArray(ele))===true){
        
        if((ele===undefined)||(ele.length===0)) {
    
            return res;
        }
        else{
            let joinEle=ele.join(',');
            //console.log(joinEle);
            let splitArr=joinEle.split(',');
            //console.log(splitArr);
            for(let i=0;i<splitArr.length;i++){
               res.push(parseInt(splitArr[i]));
               
            }
        } 
    }
    else{
        return res;
     }  
    return res; 

}

module.exports=impFlatten;
