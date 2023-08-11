function digits(num){
    num = String(num);
   
    let sum=0;
    for(let i = 0; i<=num.length-1; i++){
      sum+=Number(num[i])
    }
    console.log(sum)

}