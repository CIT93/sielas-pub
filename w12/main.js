const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output")

const displayOutput= (callback) => {
const h1 = document.createElement("h1");
h1.textContent = console.log(`You have selected "${FORM.workouttype.value}" as your workout.`);
OUTPUT.appendChild(h1);
setTimeout(() => {
    callback(FORM.workouttype.value);
}, 2000);
}

const stopWorkout = (callback) => {
    const h2 = document.createElement("h2");
    h2.textContent = `Finish ${FORM.workouttype.value}`;
    OUTPUT.appendChild(h2);
  };

FORM.addEventListener("submit", e =>  {
    e.preventDefault();
    displayOutput(stopWorkout);
    FORM.reset();
}); 