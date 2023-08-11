function reverse(num, array) {
    let myArr = [];
    for (let i = 0; i < num; i++) {
        myArr.push(array[i]);
    }
    let newArr = "";
    for (let j = myArr.length - 1; j >= 0; j--) {
        newArr += myArr[j] + " ";
    }
    console.log(newArr)

}