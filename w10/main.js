import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSize } from "./footprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {cfpData, saveLS} from "./storage.js";

// const start = (firstName, lastName, numberInHousehold, houseSize) => {
//   const houseHoldPTS = determineHouseHoldPts();
//   const houseSizePTS = determineHouseSize();
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstname: firstName,
//     lastname: lastName,
//     members: numberInHousehold,
//     size: houseSize,
//     memberPoints: houseHoldPTS,
//     sizePoints: houseSizePTS,
//     cfpTotal: total,
//   });
// }

const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseSizePTS = determineHouseSize(i[3]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstname: i[0],
    lastname: i[1],
    members:i[2],
    size: i[3],
    memberPoints: houseHoldPTS,
    sizePoints: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
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
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    start(FNAME.value, LNAME.value, parseInt(FORM.numberinhousehold.value), FORM.housesize.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else{
    SUBMIT.textContent = "Form requires first name and last name";
  }

});

// rest operator
// const add2 = function(...a) {
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

// arrow function

const add2 = a => 2 + a;

const result = add2(100);

//IIFE

const a = 3;

(function (a){
  console.log("inside IIFE");
  console.log(a);
})(a);