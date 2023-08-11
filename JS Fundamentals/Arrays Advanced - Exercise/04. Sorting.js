function sort(numbers){
    let newArr = [];
    numbers = numbers.sort((a,b) => b-a); 
 
    while(numbers.length>0){
        let a = numbers.shift();
        let b = numbers.pop();
        newArr.push(a,b);
 
    }
console.log(newArr.join(" "));
}