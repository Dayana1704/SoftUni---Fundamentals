function distinct(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        let currNum = array[i];
        for (let j = i + 1; j <= array.length - 1; j++) {
            let nextNum = array[j];

            if (currNum == nextNum) {
                array.splice(j, 1);
                j = j-1;
            }
        }
    }
console.log(array.join(" "))
}