function max(array) {
    let newArr = [];
    for (let i = 0; i <= array.length - 1; i++) {
        let isBigger = true;
    
        for (let j = i + 1; j <= array.length - 1; j++) {
            if (array[i] > array[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }

        }
        if(isBigger){
            newArr.push(array[i]);
        }
    }
    console.log(newArr.join(" "))
}