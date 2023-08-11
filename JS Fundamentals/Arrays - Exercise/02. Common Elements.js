function solve(array1, array2) {
    for (let i = 0; i <= array1.length - 1; i++) {
        for (let j = 0; j <= array2.length - 1; j++) {
            if (array1[i] === array2[j]) {
                console.log(array1[i]);
            }
        }
    }

}