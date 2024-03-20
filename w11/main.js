import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSize } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {cfpData, saveLS} from "./storage.js";
import {FP} from "./fp.js";

const start = (firstName, lastName, numberInHousehold, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
  const houseSizePTS = determineHouseSize(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  // cfpData.push({
  //   firstname: firstName,
  //   lastname: lastName,
  //   members: numberInHousehold,
  //   size: houseSize,
  //   memberPoints: houseHoldPTS,
  //   sizePoints: houseSizePTS,
  //   cfpTotal: total,
  // });
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
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.numberinhousehold.value), FORM.housesize.value, FORM.foodchoice.value);
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else{
    SUBMIT.textContent = "Form requires first name and last name";
  }

});

// const me = {
//   name: "Siela",
//   hairColor: "Black",
//   location: "Home",
//   sleepScore: 90,
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//   }
// }
// const you = {
//   name: "Sean",
//   hairColor: "Brown",
//   location: "Job",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this);
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//   }
// }

// me.introduce(); 
// you.introduce();
// console.log(this);

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name;
//     this.hairColor = hairColor;
//     this.location = location;
//     this.sleepScore = sleepScore;
//   }
//   introduce(){
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and has a sleepscore of ${this.sleepScore}.`)
//   }
// }

// const siela = new Human("Siela", "Black", "Home", 90);
// const sean = new Human("Sean", "Brown", "Job", 95);
// siela.introduce();
// sean.introduce();


