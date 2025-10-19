const toggleIngredientsBtn = document.getElementById("toggleIngredients");
const toggleStepsBtn = document.getElementById("toggleSteps");
const ingredientsSection = document.querySelector(".ingredients");
const stepsSection = document.querySelector(".steps");
const startCookingBtn = document.getElementById("startCooking");
const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const steps = document.querySelectorAll(".steps ol li");

let currentStep = 0;

// Toggle ingredients visibility
toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsSection.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsSection.classList.contains("hidden")
    ? "Show Ingredients" : "Hide Ingredients";
});

// Toggle steps visibility
toggleStepsBtn.addEventListener("click", () => {
  stepsSection.classList.toggle("hidden");
  progressBarContainer.classList.toggle("hidden");
  toggleStepsBtn.textContent = stepsSection.classList.contains("hidden")
    ? "Show Steps" : "Hide Steps";
});

// Start cooking sequence
startCookingBtn.addEventListener("click", () => {
  if (stepsSection.classList.contains("hidden")) {
    stepsSection.classList.remove("hidden");
    progressBarContainer.classList.remove("hidden");
  }

  steps.forEach(step => step.style.background = "none"); // reset
  currentStep = 0;
  highlightStep();
});

// Highlight next step
function highlightStep() {
  if (currentStep < steps.length) {
    steps.forEach(step => step.style.background = "none");
    steps[currentStep].style.background = "#ffe3e3";
    let progress = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";
    currentStep++;
  } else {
    alert("🎉 All steps completed! Enjoy your cake!");
    progressBar.style.width = "100%";
  }
}

// Optional: move to next step on click
progressBarContainer.addEventListener("click", highlightStep);
