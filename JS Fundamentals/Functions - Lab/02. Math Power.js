function solve(num, pow){
    let result = num;
    for(let i = 1; i <pow; i++){
        result*= num;
    }
    console.log(result)
    }