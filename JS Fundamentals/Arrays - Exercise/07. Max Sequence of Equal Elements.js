function sequence(array){
    let finalArr = [];
  
    for(let i=0; i<=array.length-1; i++){
        let newArr =[];
        for(let j = i; j<=array.length-1;j++){
            if(array[i] == array[j]){
                newArr.push(array[j]);
            }else{
                break;
            }
            
        }
        if(newArr.length > finalArr.length){
          finalArr=newArr;
      }
    }
    console.log(finalArr.join(" "));
  }