function solve(num1, num2, num3) {
 

    let sum = num1+num2+num3;
    let newSum = Math.ceil(sum);
    if(sum!==newSum){
        console.log(`${sum} - Float`)
    }
    else{
        console.log(`${sum} - Integer`)
    }
    
}