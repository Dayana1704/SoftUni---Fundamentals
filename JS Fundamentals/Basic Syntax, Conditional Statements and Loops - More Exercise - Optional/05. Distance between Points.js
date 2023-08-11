function distance(x1, y1, x2, y2){
    let x1x2Result = Math.pow(x2-x1, 2);
    let y1y2Result = Math.pow(y2-y1, 2)
    let sumResults = x1x2Result+y1y2Result;
    let finalResult = Math.sqrt(sumResults);
    console.log(finalResult)

}