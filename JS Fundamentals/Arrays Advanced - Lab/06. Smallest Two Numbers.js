function smallest(array){
    let newArr = array.sort((a,b) => a-b).slice(0,2);
    console.log(newArr.join(" "));
}