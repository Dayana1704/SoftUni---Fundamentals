function word(wrongString, char, rightString){
    let word = "";
    for(let i = 0; i<wrongString.length; i++){
    if(wrongString[i] == "_"){
        word+=char;
    }else{
        word+=wrongString[i]
    }
    }
    if(word==rightString){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }
    
    }