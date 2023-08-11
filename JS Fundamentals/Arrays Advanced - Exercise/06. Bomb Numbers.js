function bomb(array, specialArray) {
    let bombNum = specialArray.shift();
    let power = specialArray.shift();


   
    let where = array.indexOf(bombNum);
    while (where !== -1) {


        let start = Math.max(0, where - power);
        let end = power * 2 + 1;
        array.splice(start, end);
        where = array.indexOf(bombNum)

    }


    let sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        sum += array[i];
    }
    console.log(sum)
}