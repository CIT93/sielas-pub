const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");

const displayText = () => {
  h1.textContent = `You have selected "${FORM.workouttype.value}" as your workout.`;
  h3.textContent = `Reps to do: ${FORM.reps.value}`;
  OUTPUT.appendChild(h1);
  OUTPUT.appendChild(h3);
};

const displayOutput = () => {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (FORM.workouttype.value == " ") {
        reject("bad");
      } else {
        resolve("good");
      }
    }, 4000);
  });

  p.then(() => {
    h4.textContent = "Nice workout brah";
    OUTPUT.appendChild(h4);
  }).catch(() => {
    h4.textContent = "You have made a grave mistake.";
    OUTPUT.appendChild(h4);
  });
};

const stopWorkout = (workout) => {
  setTimeout(() => {
    const h2 = document.createElement("h2");
    h2.textContent = `Finish ${workout}s`;
    OUTPUT.appendChild(h2);
  }, 3000);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  displayText();
  stopWorkout(FORM.workouttype.value);
  displayOutput();
  FORM.reset();
});
