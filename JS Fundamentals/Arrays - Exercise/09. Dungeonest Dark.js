function game(array){
    let health = 100;
    let coins = 0; 
    let rooms = array[0].split("|");
    let isDead = false;
  
    
    for(let i = 0; i<=rooms.length-1; i++){
        let round = rooms[i].split(" ");
        if(isDead){
            break;
        }
       
        for(let j = 0; j<round.length-1; j++){
            if(round[0] == "potion"){
                health+= Number(round[1]);
                if(health>100){
 console.log(`You healed for ${100 - (health - round[1])} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                    
                }else{
                   
                console.log(`You healed for ${round[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
                }
            }else if(round[0]== "chest"){
                coins+= Number(round[1]);
                console.log(`You found ${round[1]} coins.`)
            }else{
                let monster = round[0];
                let attack = round[1];
                health-= attack;
                if(health>0){
                   
                    console.log(`You slayed ${round[0]}.`)
                }else{
                  
               isDead = true;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i+1}.`);
                    break;
                    
                    }
                    
                  
                }
                
            }
            if(i == rooms.length-1 && !isDead){
                console.log("You've made it!");
                console.log(`Coins: ${coins}`);
                console.log(`Health: ${health}`)
            }
        }

    
    }