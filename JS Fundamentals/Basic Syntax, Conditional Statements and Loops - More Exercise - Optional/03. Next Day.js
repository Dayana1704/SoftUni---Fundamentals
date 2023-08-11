function solve(year,month,day){
    let d = new Date(year, month, day)
    d.setDate(d.getDate()+1);
    let year2 = d.getFullYear();
    let month2 = d.getMonth();
    let day2 = d.getDate();
    console.log(`${year2}-${month2}-${day2}`);
    
    
    
    }