function solve(array){
    let newArr = [];
    
    for(let element of array){
        if(element >=0){
            newArr.push(element)
        }else{
            newArr.unshift(element)
        }
    }
    console.log(newArr.join("\n" ));
    
    }