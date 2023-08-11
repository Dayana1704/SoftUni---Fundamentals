function solve(array){
    let oddNumbers = 0;
    let evenNumbers = 0;
    for(let i = 0; i<=array.length-1; i++){
        let num = Number(array[i]);
        if(num%2==0){
            evenNumbers+=num;
        }else{
            oddNumbers+=num;
        }
    }
    console.log(evenNumbers-oddNumbers)

}