
let carbonFootprintPoints = 0;
let numberInHousehold = 1;

if(numberInHousehold === 1) {
    carbonFootprintPoints = 14;
}
else if(numberInHousehold === 2) {
    carbonFootprintPoints = 12;
} 
else if (numberInHousehold === 3) {
    carbonFootprintPoints = 10;
}
else if(numberInHousehold === 4) {
    carbonFootprintPoints = 8;
}
else if(numberInHousehold === 5) {
    carbonFootprintPoints = 6;
}
else if(numberInHousehold === 6) {
    carbonFootprintPoints = 4;
}
else if(numberInHousehold > 6) {
    carbonFootprintPoints = 2;
}
else {
    console.log("no update to points")
}

console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);