function magic(array, num){
    for(let i =0; i<=array.length-1; i++){
        for(let j = i; j<=array.length-1;j++){
            let sum=  Number(array[i]) + Number(array[j]);
            if(sum==num){
                console.log(array[i], array[j])
            }else{
                continue;
            }
        }
    }



}