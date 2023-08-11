function solve(array){
    let sum1 = 0;
    let sum2 = 0;

    let newArr = [];
    for(let i=0; i<=array.length-1; i++){
        sum1+=Number(array[i]);
if(array[i]%2 ==0){
    newArr.push(array[i] + i)
}else{
    newArr.push(array[i] - i)
}
    }
    console.log(newArr)
    for(let j=0; j<=newArr.length-1; j++){
        sum2+=Number(newArr[j]);
    }
    console.log(sum1);
    console.log(sum2)
}