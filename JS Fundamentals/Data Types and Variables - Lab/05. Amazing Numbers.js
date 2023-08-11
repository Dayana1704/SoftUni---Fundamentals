function solve(num) {
    let sum = 0;
    let isAmazing = false;
    num = String(num);
    for (let i = 0; i <= num.length - 1; i++) {
        sum += Number(num[i]);

    }
    sum = String(sum);
    for (let j = 0; j <= sum.length - 1; j++) {

        if (sum[j] == "9") {
            isAmazing = true;

        } else {
            isAmazing = false;

        }

    }
    if(isAmazing){
        console.log(`${num} Amazing? True`)
    }else{
        console.log(`${num} Amazing? False`)
    }


}