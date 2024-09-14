// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Get the "toggle-skills" button element
    const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
  
    // Get the "skills" section element
    const skills = document.getElementById("skills") as HTMLElement;
  
    // Add an event listener to the button to toggle visibility
    toggleButton.addEventListener("click", () => {
      // Check the current display status of the skills section
      if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block";  // Show the skills section
        toggleButton.innerText = "Hide Skills"; // Change button text to "Hide Skills"
      } else {
        skills.style.display = "none";  // Hide the skills section
        toggleButton.innerText = "Show Skills"; // Change button text to "Show Skills"
      }
    });
  });
  