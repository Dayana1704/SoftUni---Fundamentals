function gladiator(lostFights, helmetPrice, swordPrice, sheieldPrice, armourPrice){
    let sum=0;
for(let i =1; i<=lostFights;i++){
    if(i%2 ==0){
sum+=helmetPrice;
    } if(i%3==0){
        sum+=swordPrice;
    } if(i%6 ==0){
       
        sum+=sheieldPrice;
    
    }if(i%12==0){
     
        sum+=armourPrice;
    }

}
console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}