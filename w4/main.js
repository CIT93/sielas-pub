const cfpData = [];
function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if(numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if(numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if(numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if(numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if(numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if(numberInHousehold > 6) {
        houseHoldPoints = 2;
    } else {
        console.log("no update to points")
    }
    return houseHoldPoints;
}

function determineHouseSize(houseSize) {
    let houseSizePoints = 0;
    if(houseSize === "large") {
        houseSizePoints = 10;
    }
    else if(houseSize === "medium") {
        houseSizePoints = 7;
    }
    else if(houseSize === "small") {
        houseSizePoints = 4;
    }
    else if(houseSize === "apartment"){
        houseSizePoints = 2;
    }
    return houseSizePoints;
}

console.log("global scope");

function start(numberInHousehold, houseSize) {
   const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
   const houseSizePTS = determineHouseSize(houseSize);
   const total = houseHoldPTS + houseSizePTS;
   cfpData.push([numberInHousehold, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
    for(arr of cfpData){
        console.log(arr);
        const output = document.getElementById("output");
        const newH1 = document.createElement("h1");
        newH1.textContent = `Your Carbon Footprint is ${arr[4]}`;
        const newP = document.createElement("p");
        newP.textContent = `The amount of people in the household is ${arr[0]} so add ${arr[2]} to your score, the housesize is ${arr[1]}, so add ${arr[3]} to your score. Your total carbon foorprint score is ${arr[4]}.`;
        output.appendChild(newH1);
        output.appendChild(newP);
       
    }
}

start(7, "large");
start(6, "large");
start(5, "large");
start(4, "large");
start(3, "large");
start(2, "large");
start(1, "large");

start(7, "medium");
start(6, "medium");
start(5, "medium");
start(4, "medium");
start(3, "medium");
start(2, "medium");
start(1, "medium");

start(7, "small");
start(6, "small");
start(5, "small");
start(4, "small");
start(3, "small");
start(2, "small");
start(1, "small");

start(7, "apartment");
start(6, "apartment");
start(5, "apartment");
start(4, "apartment");
start(3, "apartment");
start(2, "apartment");
start(1, "apartment");

displayOutput();