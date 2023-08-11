function rotate(array, rotations){
    let counter = rotations; 
    
        
        for(let i =0; i<rotations; i++){
            let currentNum = array.shift();
array.push(currentNum);
            
          
        }
        
    
console.log(array.join(" "))
}