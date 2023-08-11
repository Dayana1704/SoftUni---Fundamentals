function spices(startingYield){
    let daysCounter = 0;
    let amount = 0;
    while(startingYield>= 100){
        amount+=startingYield;
        daysCounter++;
        amount-=26;
        startingYield-=10;


    }
    if(amount>=26){
        amount-=26;
    }else{
        amount=amount;
    }
    console.log(daysCounter)
    console.log(amount)
}