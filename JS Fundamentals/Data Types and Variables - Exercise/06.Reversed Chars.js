function reversed(char1, char2, char3){
    let characters = `${char1}${char2}${char3}`
let reversedChars = characters.split("").reverse().join(" ");
console.log(reversedChars)
}