function triangle(num){

    for(let i=1;i<=num;i++){
        let place="";
        for(let j=1; j<=i;j++){
        place+=i;
        if(j!==i){
            place+=" ";
        }
    }
    
    console.log(place);
    
    }

}