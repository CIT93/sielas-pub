import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  } else {
    console.log("no update to points");
  }
  return houseHoldPoints;
}

function determineHouseSize(houseSize) {
  let houseSizePoints = 0;
  if (houseSize === "large") {
    houseSizePoints = 10;
  } else if (houseSize === "medium") {
    houseSizePoints = 7;
  } else if (houseSize === "small") {
    houseSizePoints = 4;
  } else if (houseSize === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

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

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHousehold = parseInt(FORM.numberinhousehold.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, numberInHousehold, houseSize);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
