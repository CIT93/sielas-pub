import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSize } from "./footprint.js";
import {FORM, errorElement, firstNameInput, lastNameInput, householdInput, housesizeInput} from "./global.js";
import {cfpData, saveLS} from "./storage.js";

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

// renderTbl(cfpData);


FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  let messages = [];
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHousehold = parseInt(FORM.numberinhousehold.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, numberInHousehold, houseSize);
  saveLS(cfpData);
  if(firstNameInput.value === '' || firstNameInput.value === null) {
    messages.push("First name is required");
  }
  if(lastNameInput.value === '' || lastNameInput.value === null) {
    messages.push("Last name is required");
    
  }
  if(messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ")
   
  }
  else{
    renderTbl(cfpData);
    cfpData
  }
  
  FORM.reset();
});
