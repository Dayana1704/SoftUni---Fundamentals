function login(input) {

    let username = input[0];
    let isFound = false;
    let counter = 0;

    for (let index = 1; index <= input.length-1; index++) {
        counter++
        if (counter >= 4) {
            isFound=false;
            console.log(`User ${input[index]} blocked!`)
            break;
        }
        
        let reversedString = input[index].split("").reverse().join("");;
      
       if(reversedString!==username){
           isFound= false;
           console.log(`Incorrect password. Try again.`)
       }else{
           isFound=true;
           if(isFound){
           console.log(`User ${reversedString} logged in.`);
           break;
           }
       }
        
    }

}