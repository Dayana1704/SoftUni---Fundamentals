function isEqual(array) {
    if (array.length > 1) {

        for (let i = 0; i <= array.length - 1; i++) {
            let leftSum = 0;
            let rightSum = 0;
          

            for (let j = i + 1; j <= array.length - 1; j++) {
                leftSum += Number(array[j]);
                
            }
            for (let k = i - 1; k >= 0; k--) {
                rightSum += Number(array[k]);
             

            }



            if (leftSum == rightSum) {
                console.log(i);
                break;

            } if(i == array.length-1&& leftSum!==rightSum){
                console.log("no");
            }
        }

    }
    else {
        console.log("0")
    }

}