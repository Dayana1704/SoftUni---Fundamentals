function pyramid(size, increment) {
    let height = increment;
    let stone = 0;
    let marble = 0;
    let lapus = 0;
let gold=0;
let counter=0;

    while (size >= 1) {
        counter++;
       
        if (size <=2) {
            gold += Math.pow(size, 2) * increment;
            break;
        }
        stone += Math.pow(size - 2, 2) * increment;
        if (counter % 5 !== 0) {
            marble +=( 4 * size - 4) * increment;
        } else {
            lapus += (4 * size - 4) * increment;
        }
        
        height+=increment;
        size -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapus)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);


}