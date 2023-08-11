function solve(array1, array2){
    let newArr = [];
for(let i =0; i<=array1.length-1;i++){
    if(i%2 ==0){
        /*if(i==array1.length-1){
            newArr.push(Number(array1[i]) + Number(array2[i]));
        }else{*/
        newArr.push(Number(array1[i]) + Number(array2[i]));
        //}
    }else{
        //array1[i] = Number(array1[i]);
        //array2[i] = Number(array2[i])
       /*if(i==array1.length-1){*/
            newArr.push(`${array1[i]}${array2[i]}`);
       /*}else{
            newArr.push(`${array1[i]}${array2[i]}`);

        }*/
        
    }
}
/*let fakeArr = ""; 
for(let j =0; j<=newArr.length-1; j++){
fakeArr+= newArr[j];
}

console.log(fakeArr)
}*/
console.log(newArr. join(" - "));
}