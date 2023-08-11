function print(num1, num2){
    let sum=0;
    let place="";
    for(let i=num1; i<=num2; i++){
        sum+=i;
        place+=i+" ";;
        
    }
    console.log(place);
    console.log(`Sum: ${sum}`)

}