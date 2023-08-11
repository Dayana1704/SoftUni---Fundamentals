function sequence(length, k){
    let arr =[1];
    
    
  for(let i =1; i<length; i++){ 
    let lastK = arr.slice(-k);

    let sum=0;
    for(let element of lastK){
        sum+=element;
    }
    arr.push(sum);

      
     
}
console.log(arr.join(" "))
  
}