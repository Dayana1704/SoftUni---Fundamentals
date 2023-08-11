function sort(num1, num2, num3){
    let array = [num1, num2, num3];
    let newArray ='';
    array.sort(function(a,b){
        return b-a;
        
    })
    for(let i =0;i<=array.length-1; i++){
        newArray+=array[i]+ "\r\n";
        
    }
    console.log(newArray)
    }