function solve(array){
  
    if(array.length==1){
        
    
    }else{
        
    
while(array.length>1){
    
    let newArr = [];
for(let i = 0; i<array.length-1; i++){
    newArr.push(array[i] + array[i+1])
    
}

array = newArr;

}
}
let sum = Number(array);
console.log(sum)
}