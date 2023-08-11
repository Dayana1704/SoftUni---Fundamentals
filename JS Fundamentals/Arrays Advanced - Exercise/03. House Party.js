function party(array) {
    let newArr = [];
    for (let line of array) {
        let sentence = line.split(" ");
        let guest = sentence[0];
        let isIncluded = newArr.includes(guest);
        if (sentence.length == 3) {

            if (isIncluded) {
                console.log(`${guest} is already in the list!`)
            } else {
                newArr.push(guest);

            }
        } else {
            if (isIncluded) {
                let where = newArr.indexOf(guest);
                newArr.splice(where, 1);

            } else {
                console.log(`${guest} is not in the list!`)
            }

        }
    }


    console.log(newArr.join("\n"));
}