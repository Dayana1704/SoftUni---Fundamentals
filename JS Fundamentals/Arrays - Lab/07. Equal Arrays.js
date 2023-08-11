function equal(array1, array2){
    let counter = -1;
    let sum = 0;
    isIdentical = false;
    for(let i = 0; i<=array1.length-1; i++){
        counter++;
        array1[i] = Number(array1[i]);
        array2[i] = Number(array2[i]);
        if(array1[i] == array2[i]){
           isIdentical = true;
            sum+= Number(array1[i]);
        }else{
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${counter} index`);
            break;
        }
        
    }
    if(isIdentical){
    console.log(`Arrays are identical. Sum: ${sum}`)
    }


}