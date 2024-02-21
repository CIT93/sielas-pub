const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");


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

// function displayOut(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH1 = document.createElement("h1");
//   newH1.textContent = `Your Carbon Footprint is ${obj.cfpTotal}`;
//   const newP = document.createElement("p");
//   newP.textContent = `The amount of people in the household is ${obj.members} so add ${obj.memberPoints} to your score, the housesize is ${obj.size}, so add ${obj.sizePoints}} to your score. Your total carbon foorprint score is ${obj.cfpTotal}.`;
//   output.appendChild(newH1);
//   output.appendChild(newP);
// }


function start(firstName, lastName, numberInHousehold, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
  const houseSizePTS = determineHouseSize(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstname: firstName,
    lastname: lastName,
    members: numberInHousehold,
    size: houseSize,
    memberPoints: houseHoldPTS,
    sizePoints: houseSizePTS,
    cfpTotal: total,
  });
}

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj);
    const newH1 = document.createElement("h1");
    newH1.textContent = `Your Carbon Footprint is ${obj.cfpTotal}`;
    const newH2 = document.createElement("h2");
    newH2.textContent = `Name: ${obj.firstname} ${obj.lastname}`;
    const newP = document.createElement("p");
    newP.textContent = `The amount of people in the household is ${obj.members} so add ${obj.memberPoints} to your score,`;
    newP.textContent += ` the housesize is ${obj.size}, so add ${obj.sizePoints} to your score. Your total carbon foorprint score is ${obj.cfpTotal}.`;
    OUTPUT.appendChild(newH1);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newP);
  }
}

FORM.addEventListener("submit", function(e){
    e.preventDefault(); 
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const numberInHousehold = parseInt(FORM.numberinhousehold.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, numberInHousehold, houseSize);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})
