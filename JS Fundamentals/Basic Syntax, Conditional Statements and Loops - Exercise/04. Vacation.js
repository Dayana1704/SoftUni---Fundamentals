function vacation(countGroup, typeGroup, weekDay) {
    let sum = 0;
    let totalPrice=0;

    if (typeGroup == "Students" && weekDay == "Friday") {
        sum += 8.45;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Students" && weekDay == "Saturday") {
        sum += 9.80;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Students" && weekDay == "Sunday") {
        sum += 10.46;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Business" && weekDay == "Friday") {
        sum += 10.90;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Business" && weekDay == "Saturday") {
        sum += 15.60;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Business" && weekDay == "Sunday") {
        sum += 16;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Regular" && weekDay == "Friday") {
        sum += 15;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Regular" && weekDay == "Saturday") {
        sum += 20;
        totalPrice=sum*countGroup;
    } else if (typeGroup == "Regular" && weekDay == "Sunday") {
        sum += 22.50;
        totalPrice=sum*countGroup;
    }

    if (typeGroup == "Students" && countGroup >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (typeGroup == "Business" && countGroup >= 10) {
        totalPrice = totalPrice - (10 * sum);
    } else if (typeGroup == "Regular" && countGroup >= 10 && countGroup <= 20) {
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}