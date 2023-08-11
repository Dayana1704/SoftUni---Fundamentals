function solve(array){
    let k = array.length-1;
    for(let i=0; i<array.length/2; i++, k--){
       let temp = array[i];//i
       array[i]= array[k];//i=k; k 
       array[k]= temp; // k =i;

    }
    console.log(array.join(" "));
}