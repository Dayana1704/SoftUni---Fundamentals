function solve(num){

    let counter=0;
    let sum=0;
for(let i=1; i<=100;i++){
    if(i%2!==0){
        sum+=i;
    console.log(i);
    counter++;
    if(counter==num){
        break;
    }
}

    
}
console.log(`Sum: ${sum}`)

    
  
}