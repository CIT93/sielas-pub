import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSize } from "./footprint.js";
import {FORM} from "./global.js";
import {cfpData, saveLS} from "./storage.js";

const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const submitElement = document.getElementById("submitError");


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

renderTbl(cfpData);

// Function to validate a single field
function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
firstNameElement.addEventListener('blur', validateField);
lastNameElement.addEventListener('blur', validateField);


FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameElement.value !== '';
  const lastNameIsValid = lastNameElement.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    submitElement.textContent = "";
    submitElement.classList.remove("invalid");
    const numberInHousehold = parseInt(FORM.numberinhousehold.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, numberInHousehold, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else{
    submitElement.textContent = "Form requires first name and last name";
  }

});
