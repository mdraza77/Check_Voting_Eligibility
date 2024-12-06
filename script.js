function Validate_Age() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  // Input validation
  if (age.trim() === "") {
      updateResult("Please enter your age", "error");
      return;
  }

  // Check for valid number and convert
  if (isNaN(age) || !Number.isInteger(parseFloat(age))) {
      updateResult("Please enter a whole number", "error");
      return;
  }

  // Convert to number
  age = parseInt(age);

  // Age range validation
  if (age < 0) {
      updateResult("Age cannot be negative", "error");
      return;
  }

  if (age > 110) {
      updateResult("Invalid age! Please enter a realistic age", "error");
      return;
  }

  // Age category validation
  if (age >= 18) {
      determineAdultCategory(age);
  } else {
      determineYouthCategory(age);
  }
}

function determineAdultCategory(age) {
  if (age >= 18 && age <= 25) {
      updateResult("You're a young voter! Exercise your right to vote!", "success");
  } else if (age > 25 && age <= 60) {
      updateResult("You are eligible to vote! Your vote matters!", "success");
  } else {
      updateResult("Senior citizen voter! Your experience counts!", "success");
  }
}

function determineYouthCategory(age) {
  const yearsLeft = 18 - age;
  
  if (age < 5) {
      updateResult(`You're just a toddler! Come back in ${yearsLeft} years!`, "error");
  } else if (age >= 5 && age < 13) {
      updateResult(`You're still a kid! Wait ${yearsLeft} more years to vote`, "error");
  } else {
      updateResult(`Almost there! Only ${yearsLeft} years until you can vote`, "error");
  }
}

function updateResult(message, type) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = type === "error" ? "#dc3545" : "#28a745";
}

function showRefreshPopup() {
  if (confirm("Do you want to refresh the page?")) {
      clearForm();
  }
}

function clearForm() {
  document.getElementById("age").value = "";
  updateResult("Check if you're eligible to vote", "normal");
  document.getElementById("age").focus();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  const ageInput = document.getElementById("age");
  
  // Enter key handler
  ageInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          Validate_Age();
      }
  });

  // Input validation - allow only numbers
  ageInput.addEventListener("input", function(e) {
      this.value = this.value.replace(/[^0-9]/g, '');
  });
});