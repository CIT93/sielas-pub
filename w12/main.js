const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output")

const displayOutput = (callback) => {
const workout = FORM.workouttype.value;
const reps = FORM.reps.value;
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
h1.textContent = `You have selected "${workout}" as your workout.`;
h3.textContent = `Reps to do: ${reps}`;
OUTPUT.appendChild(h1);
OUTPUT.appendChild(h3);

setTimeout(() => {
    callback(workout);
}, 2000);
}

const stopWorkout = (workout) => {
    const h2 = document.createElement("h2");
    h2.textContent = `Finish ${workout}s`;
    OUTPUT.appendChild(h2);
  };

FORM.addEventListener("submit", e =>  {
    e.preventDefault();
    displayOutput(stopWorkout);
    FORM.reset();
}); 