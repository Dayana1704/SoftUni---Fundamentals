function rounding(num1, num2){
    let firstNum = Number(num1);
    let secondNum=Number(num2);

    if(secondNum>15){
        secondNum=15;
    }
    console.log(parseFloat(firstNum.toFixed(secondNum)))

}