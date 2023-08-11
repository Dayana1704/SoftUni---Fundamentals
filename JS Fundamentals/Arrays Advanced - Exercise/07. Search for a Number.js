function search(array1, array2) {
    let numsToTake = array2.shift();
    let numsToDelete = array2.shift();
    let searchedNum = array2.shift();
    counter = 0;

    array1 = array1.slice(0, numsToTake);
    array1.splice(0, numsToDelete);
    let isIncluded = array1.includes(searchedNum);
    let indexOfInclusion = array1.indexOf(searchedNum);
    while(indexOfInclusion!==-1){
        counter++;
        array1.splice(indexOfInclusion,1);
        indexOfInclusion = array1.indexOf(searchedNum);
    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`)
}