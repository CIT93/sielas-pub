function determineHouseHoldPts(numberInHousehold) {
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = 14;
    } else if(numberInHousehold === 2) {
        carbonFootprintPoints = 12;
    } else if(numberInHousehold === 3) {
        carbonFootprintPoints = 10;
    } else if(numberInHousehold === 4) {
        carbonFootprintPoints = 8;
    } else if(numberInHousehold === 5) {
        carbonFootprintPoints = 6;
    } else if(numberInHousehold === 6) {
        carbonFootprintPoints = 4;
    } else if(numberInHousehold > 6) {
        carbonFootprintPoints = 2;
    } else {
        console.log("no update to points")
    }
    console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
// const numberInHousehold = 3;


// global scope

determineHouseHoldPts(3)
determineHouseHoldPts(4)

function determineHouseSize(houseSize) {
    if(houseSize === "large") {
    carbonFootprintPoints = 10;
    }
    else if(houseSize === "medium") {
        carbonFootprintPoints = 7;
    }
    else if(houseSize === "small") {
        carbonFootprintPoints = 4;
    }
    else if(houseSize === "apartment"){
        carbonFootprintPoints = 2;
    }
    console.log(`Based on size of house (${houseSize}), points will be ${carbonFootprintPoints}.`);
}

determineHouseSize("apartment");

