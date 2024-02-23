import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSize } from "./footprint.js";

const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

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
//   displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});