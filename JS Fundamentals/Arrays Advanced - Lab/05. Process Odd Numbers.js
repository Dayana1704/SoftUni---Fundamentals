function oddNums(array){
    let arr = array.filter((x,i)=>i%2!==0).map(x=>x*2).reverse();
    console.log(arr.join(" "));
    }