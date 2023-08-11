function train(array){

    let wagons = array.shift().split(" ").map(Number);
    let maxCapacity = Number(array.shift());
    for(let command of array){
       let currCommand = command.split(" ");
       if(currCommand[0] == "Add"){
           wagons.push(Number(currCommand[1]));
       }else{
           for(let i =0; i<=wagons.length-1; i++){
               if(wagons[i] + Number(currCommand[0])<=maxCapacity){
                   wagons[i]+= Number(currCommand[0]);
                   break;
               }
           }
       }
       
    }

    
console.log(wagons.join(" "))
}