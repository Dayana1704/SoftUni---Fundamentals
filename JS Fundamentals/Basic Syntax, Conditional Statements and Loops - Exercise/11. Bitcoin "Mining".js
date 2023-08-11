function solve(array){
    let bitcoins = 0;
    let firstBitcoin;
    let money = 0;

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    for(let i = 0; i<=array.length-1; i++){
        let currGain = array[i];
        if((i+1)%3 == 0){
            currGain*=0.70;
        }
        money += currGain*goldPrice;
    
        if(money>=bitcoinPrice){
            while(money>bitcoinPrice){
            money-=bitcoinPrice;
            bitcoins++;
            if(bitcoins==1){
                firstBitcoin=i+1;
            }
            }
            
        }
        
        
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins!==0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}